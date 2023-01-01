package com.rnmlkittutorial.mlkit;

import android.graphics.Point;
import android.graphics.Rect;
import android.net.Uri;
import android.util.Log;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableArray;
import com.facebook.react.bridge.WritableMap;
import com.google.android.gms.tasks.OnFailureListener;
import com.google.android.gms.tasks.OnSuccessListener;
import com.google.android.gms.tasks.Task;
import com.google.mlkit.vision.common.InputImage;
import com.google.mlkit.vision.text.Text;
import com.google.mlkit.vision.text.TextRecognition;
import com.google.mlkit.vision.text.TextRecognizer;
import com.google.mlkit.vision.text.latin.TextRecognizerOptions;

import java.io.IOException;

public class TextRecognitionModule extends ReactContextBaseJavaModule {
    TextRecognitionModule(ReactApplicationContext context) {
        super(context);
    }

    @Override
    public String getName() {
        return "TextRecognitionModule";
    }

    public  WritableMap getRectMap(Rect rect){
         WritableMap rectObject = Arguments.createMap();

         rectObject.putInt("left", rect.left);
         rectObject.putInt("top", rect.top);
        rectObject.putInt("width", rect.right - rect.left);
        rectObject.putInt("height", rect.bottom - rect.top);

         return  rectObject;
    }

    @ReactMethod
    public void recognizeImage(String url, Promise promise) {
        Log.d("TextRecognitionModule", "Url: " + url);

        Uri uri = Uri.parse(url);
        InputImage image;
        try {
            image = InputImage.fromFilePath(getReactApplicationContext(), uri);

            TextRecognizer recognizer = TextRecognition.getClient(TextRecognizerOptions.DEFAULT_OPTIONS);

                    recognizer.process(image)
                            .addOnSuccessListener(new OnSuccessListener<Text>() {
                                @Override
                                public void onSuccess(Text result) {
                                    WritableMap response = Arguments.createMap();
                                    response.putInt("width", image.getWidth());
                                    response.putInt("height", image.getHeight());

                                    WritableArray blocks = Arguments.createArray();
                                    for (Text.TextBlock block : result.getTextBlocks()) {
                                        WritableMap blockObject = Arguments.createMap();
                                        blockObject.putString("text", block.getText());
                                        blockObject.putMap("react", getRectMap(block.getBoundingBox()));

                                        WritableArray lines = Arguments.createArray();
                                        for (Text.Line line : block.getLines()) {
                                            WritableMap lineObject = Arguments.createMap();
                                            lineObject.putString("text", line.getText());
                                            lineObject.putMap("react", getRectMap(line.getBoundingBox()));
                                            lines.pushMap(lineObject);

                                            WritableArray elements = Arguments.createArray();
                                            for (Text.Element element : line.getElements()) {
                                                WritableMap elementObject = Arguments.createMap();
                                                elementObject.putString("text", element.getText());
                                                elementObject.putMap("react", getRectMap(element.getBoundingBox()));
                                                elements.pushMap(elementObject);


                                                WritableArray symbols = Arguments.createArray();
                                                for (Text.Symbol symbol : element.getSymbols()) {
                                                    WritableMap symbolObject = Arguments.createMap();
                                                    symbolObject.putString("text", symbol.getText());
                                                    symbolObject.putMap("react", getRectMap(symbol.getBoundingBox()));
                                                    symbols.pushMap(symbolObject);
                                                }
                                                blockObject.putArray("symbols", symbols);
                                            }
                                            blockObject.putArray("elements", elements);
                                        }
                                        blockObject.putArray("lines", lines);
                                        blocks.pushMap(blockObject);
                                    }
                                    response.putArray("blocks", blocks);
                                    promise.resolve(response);

                                }
                            })
                            .addOnFailureListener(
                                    new OnFailureListener() {
                                        @Override
                                        public void onFailure(@NonNull Exception e) {
                                            promise.reject("Recognition failed", e);
                                        }
                                    });

        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}