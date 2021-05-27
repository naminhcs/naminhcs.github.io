---
layout: post
title: HCMUS-CTF-Write-up-Reversing
---

### AndroidRev

We open file in jadx to decompile this file.

Open MainActivity we get this code.

~~~
package com.hcmusctf.androidrev;

import android.os.Bundle;
import android.text.Editable;
import android.text.TextWatcher;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;
import androidx.appcompat.app.AppCompatActivity;
import androidx.core.internal.view.SupportMenu;

public class MainActivity extends AppCompatActivity {
    TextView mResultWidget = null;

    /* access modifiers changed from: protected */
    @Override // androidx.activity.ComponentActivity, androidx.core.app.ComponentActivity, androidx.appcompat.app.AppCompatActivity, androidx.fragment.app.FragmentActivity
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        final EditText flagWidget = (EditText) findViewById(R.id.flag);
        final TextView resultWidget = (TextView) findViewById(R.id.result);
        this.mResultWidget = resultWidget;
        flagWidget.addTextChangedListener(new TextWatcher() {
            /* class com.hcmusctf.androidrev.MainActivity.AnonymousClass1 */

            public void beforeTextChanged(CharSequence s, int start, int count, int after) {
            }

            public void onTextChanged(CharSequence s, int start, int before, int count) {
                MainActivity.this.mResultWidget.setText("");
            }

            public void afterTextChanged(Editable s) {
            }
        });
        ((Button) findViewById(R.id.checkflag)).setOnClickListener(new View.OnClickListener() {
            /* class com.hcmusctf.androidrev.MainActivity.AnonymousClass2 */

            public void onClick(View v) {
                int color;
                String msg;
                if (FlagChecker.checkFlag(MainActivity.this, flagWidget.getText().toString())) {
                    msg = "Valid flag!";
                    color = MainActivity.this.getApplicationContext().getResources().getColor(R.color.green);
                } else {
                    msg = "Invalid flag";
                    color = SupportMenu.CATEGORY_MASK;
                }
                resultWidget.setText(msg);
                resultWidget.setTextColor(color);
            }
        });
    }
}
~~~
Easy to know, this program check our flag in Flagchecker. Open file FlagChecker.

~~~
package com.hcmusctf.androidrev;

import android.content.Context;
import android.util.Base64;
import android.util.Log;
import java.security.MessageDigest;
import java.util.HashSet;
import java.util.Set;

public class FlagChecker {
    public static boolean checkFlag(Context ctx, String flag) {
        if (!flag.startsWith("HCMUS-CTF{") || !flag.endsWith("}")) {
            return false;
        }
        String core = flag.substring(10, 42);
        if (core.length() != 32) {
            return false;
        }
        String[] ps = core.split(foo());
        if (ps.length != 5 || !bim(ps[0]) || !bum(ps[2]) || !bam(ps[4]) || !core.replaceAll("[A-Z]", "X").replaceAll("[a-z]", "x").replaceAll("[0-9]", " ").matches("[A-Za-z0-9]+.       .[A-Za-z0-9]+.[Xx ]+.[A-Za-z0-9 ]+")) {
            return false;
        }
        char[] syms = new char[4];
        int[] idxs = {15, 23, 29, 34};
        Set<Character> chars = new HashSet<>();
        for (int i = 0; i < syms.length; i++) {
            syms[i] = flag.charAt(idxs[i]);
            chars.add(Character.valueOf(syms[i]));
        }
        int sum = 0;
        for (char c : syms) {
            sum += c;
        }
        if (sum != 180 || chars.size() != 1 || !me(ctx, dh(gs(ctx.getString(R.string.ct1), ctx.getString(R.string.k1)), ps[0]), ctx.getString(R.string.t1)) || !me(ctx, dh(gs(ctx.getString(R.string.ct2), ctx.getString(R.string.k2)), ps[1]), ctx.getString(R.string.t2)) || !me(ctx, dh(gs(ctx.getString(R.string.ct3), ctx.getString(R.string.k3)), ps[2]), ctx.getString(R.string.t3)) || !me(ctx, dh(gs(ctx.getString(R.string.ct4), ctx.getString(R.string.k4)), ps[3]), ctx.getString(R.string.t4)) || !me(ctx, dh(gs(ctx.getString(R.string.ct5), ctx.getString(R.string.k5)), ps[4]), ctx.getString(R.string.t5)) || !me(ctx, dh(gs(ctx.getString(R.string.ct6), ctx.getString(R.string.k6)), flag), ctx.getString(R.string.t6))) {
            return false;
        }
        return true;
    }

    private static boolean bim(String s) {
        return s.matches("^[a-z]+$");
    }

    private static boolean bum(String s) {
        return s.matches("^[A-Z]+$");
    }

    private static boolean bam(String s) {
        return s.matches("^[0-9]+$");
    }

    private static String dh(String hash, String s) {
        try {
            MessageDigest md = MessageDigest.getInstance(hash);
            md.update(s.getBytes());
            return toHexString(md.digest());
        } catch (Exception e) {
            return null;
        }
    }

    private static String toHexString(byte[] bytes) {
        StringBuilder hexString = new StringBuilder();
        for (byte b : bytes) {
            String hex = Integer.toHexString(b & 255);
            if (hex.length() == 1) {
                hexString.append('0');
            }
            hexString.append(hex);
        }
        return hexString.toString();
    }

    public static String foo() {
        String s = "Vm0wd2QyVkZNVWRYV0docFVtMVNWVmx0ZEhkVlZscDBUVlpPVmsxWGVIbFdiVFZyVm0xS1IyTkliRmRXTTFKTVZsVmFWMVpWTVVWaGVqQTk=";
        for (int i = 0; i < 10; i++) {
            s = new String(Base64.decode(s, 0));
        }
        return s;
    }

    private static String gs(String a, String b) {
        String s = "";
        for (int i = 0; i < a.length(); i++) {
            s = s + Character.toString((char) (a.charAt(i) ^ b.charAt(i % b.length())));
        }
        return s;
    }

    private static boolean me(Context ctx, String s1, String s2) {
        try {
            return ((Boolean) s1.getClass().getMethod(r(ctx.getString(R.string.m1)), Object.class).invoke(s1, s2)).booleanValue();
        } catch (Exception e) {
            Log.e("HCMUS-CTF", "Exception: " + Log.getStackTraceString(e));
            return false;
        }
    }

    public static String r(String s) {
        return new StringBuffer(s).reverse().toString();
    }
}
~~~

The flag is: **HCMUS-CTF{something here}** and length of flag is 42. Length of string "something here" is 32. 

Character at 15, 23, 29, 34 are '-'. Now flag has format **HCMUS-CTF{s[1]-s[2]-s[3]-s[4]-s[5]}**. Length(s[1]) = 5. Length(s[2]) = 7. Length(s[3]) = 5. Length(s[4]) = 4. Length(s[1]) = 7.

s[1] contains only character (a-z), s[3] contains character (A-Z), s[5] contains character (0, 9).

Then check this code

~~~
	!me(ctx, dh(gs(ctx.getString(R.string.ct1), ctx.getString(R.string.k1)), ps[0]), ctx.getString(R.string.t1))
~~~
In Android, each string is represented by a number. We can find _resources.arsc/res/values/string_. This code get string in R.string.ct1 and R.string.k1 and encrypted by gs(). A string returned by gs is "MD5". I think string encrypted by MD5 algorithm. We can decrypt online.

Do the same, we can get flag is
```
HCMUS-CTF{peppa-9876543-BAAAM-A1z9-3133337}
```

