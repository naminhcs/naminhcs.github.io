---
layout: post
title: ctf.hackucf-Write-up-Reversing
---

### Moody Number

Do file này được biên dịch từ java. Vì vậy ta sử dụng các tool để decompile file jar này. Sau khi decompile ta được 2 file sau:

NumberChecker.java
~~~
import java.math.BigInteger;
import java.security.MessageDigest;

// 
// Decompiled by Procyon v0.5.36
// 

public class NumberChecker
{
    public boolean isHappy(int n) {
        if (n % 270719 != 0) {
            return false;
        }
        n /= 270719;
        return n == 6317;
    }
    
    public boolean isScary(final int n) {
        return (n & 0xFF) == 0x0 && n >> 12 == 0 && (n >> 8 ^ 0xF) == 0x4;
    }
    
    public boolean isNostalgic(final int i) {
        try {
            return String.format("%032x", new BigInteger(1, MessageDigest.getInstance("MD5").digest(Integer.toString(i).getBytes("UTF-8")))).equals("08ef85248841b7fbf4b1ef8d1090a0d4");
        }
        catch (Exception obj) {
            System.out.println("An error occurred: " + obj);
            return false;
        }
    }
    
    public boolean isArousing(int n) {
        final int n2 = n % 10;
        n /= 10;
        final int n3 = n % 10;
        n /= 10;
        if (n3 % 2 != 0) {
            return false;
        }
        if (n2 != n3 / 2 * 3) {
            return false;
        }
        for (int i = 0; i < 3; ++i) {
            if (n % 10 != n2) {
                return false;
            }
            n /= 10;
            if (n % 10 != n3) {
                return false;
            }
            n /= 10;
        }
        return n == 0 && n2 % 2 != 0 && (n2 ^ n3) == 0xF;
    }
}
~~~
MoodyNumbers.java
~~~
import java.security.Key;
import javax.crypto.Cipher;
import javax.crypto.spec.SecretKeySpec;
import java.nio.ByteBuffer;
import java.util.Scanner;

// 
// Decompiled by Procyon v0.5.36
// 

class MoodyNumbers
{
    public static void main(final String[] array) {
        final Scanner scanner = new Scanner(System.in);
        final NumberChecker numberChecker = new NumberChecker();
        System.out.println("Greetings, human! I am the Moody Number Bot.");
        sleep(1000);
        System.out.println("We're going to play a little game.");
        sleep(1000);
        System.out.println("Here's how it's going to go:");
        sleep(1000);
        System.out.println("I'm going to ask you to show me a number, and you're going to enter it in here.");
        sleep(1000);
        System.out.println("If you don't give me the right number, I'm going to get so angry that I stop talking to you.");
        sleep(1000);
        System.out.println("So don't give me the wrong numbers.");
        sleep(1000);
        System.out.println("Now that we've got that out of the way, let's begin!");
        sleep(1000);
        System.out.print("Show me a number that makes me happy: ");
        final int nextInt = scanner.nextInt();
        if (!numberChecker.isHappy(nextInt)) {
            wrongNumber("THAT NUMBER DOES NOT MAKE ME HAPPY!!!");
        }
        System.out.println("Ah, that number fills me with joy! Good one!");
        sleep(1000);
        System.out.println("Okay, I have another request for you.");
        sleep(1000);
        System.out.print("I'm in the mood to be scared. Frighten me with a number: ");
        final int nextInt2 = scanner.nextInt();
        if (!numberChecker.isScary(nextInt2)) {
            wrongNumber("IS THAT THE BEST YOU HAVE? THAT COULDN'T SCARE AN INFANT!!!");
        }
        System.out.println("AAAAAHHH!!! That was scary! I think I accidentally overflowed my buffer!");
        sleep(1000);
        System.out.print("Give me a number that reminds me of my childhood: ");
        final int nextInt3 = scanner.nextInt();
        if (nextInt3 == 0) {
            wrongNumber("HOW DARE YOU INSULT MY CHILDHOOD!!!");
        }
        else if (!numberChecker.isNostalgic(nextInt3)) {
            wrongNumber("THIS NUMBER REMINDS ME OF THE TIME A MEAN HACKER ALMOST FRIED MY CIRCUITS, NOT MY CHILDHOOD!!!");
        }
        System.out.println("That number brings back memories of the time I received my first UDP packet!");
        sleep(1000);
        System.out.print("Now I want a number that arouses my circuits: ");
        final int nextInt4 = scanner.nextInt();
        if (!numberChecker.isArousing(nextInt4)) {
            wrongNumber("THAT NUMBER IS SUCH A TURN-OFF THAT IT DISABLED MY NETWORK ADAPTER!!!");
        }
        System.out.println("Oooh, baby, that's a sexy number!");
        sleep(1000);
        System.out.println("Okay, you win. Here's your stupid flag. Goodbye.");
        sleep(1000);
        System.out.println(getFlag(nextInt, nextInt3, nextInt2, nextInt4));
        scanner.close();
    }
    
    static void sleep(final int n) {
        try {
            Thread.sleep(n);
        }
        catch (InterruptedException ex) {}
    }
    
    static void wrongNumber(final String str) {
        System.out.println(str + " GET AWAY FROM ME!!!");
        System.exit(1);
    }
    
    static String getFlag(final int n, final int n2, final int n3, final int n4) {
        final SecretKeySpec key = new SecretKeySpec(ByteBuffer.allocate(16).putInt(n).putInt(n2).putInt(n3).putInt(n4).array(), "AES");
        try {
            final Cipher instance = Cipher.getInstance("AES");
            instance.init(2, key);
            return new String(instance.doFinal(new byte[] { -70, 76, 66, -121, -86, -83, 121, 99, 64, 57, 38, 57, -126, 78, 41, -27, 81, 64, 106, 78, -85, 104, 2, -119, 57, 115, -48, 104, -110, 45, -12, 92, 89, -101, 49, 15, 22, 122, -71, -77, -8, 23, -102, 46, -31, 81, 60, -44 }));
        }
        catch (Exception obj) {
            System.out.println("An error occurred: " + obj);
            return "ERROR";
        }
    }
}
~~~
Đọc đoạn code checkNumber trên, ta có thể tính toán được các số như trong ảnh dưới đây:
![resMoody](/assets/img/MoodyNumber.PNG)
Ta thấy thông báo là header file bị corrup
FLAG
```
flag{th1s_1s_why_c0mpu73rs_d0n7_h4v3_f33l1ng5}
```

### WTF

Đầu tiên ta sẽ kiểm tra file trên ubuntu.
![what-file](/assets/img/MoodyNumber.PNG)

Ta thấy header file đang bị corrupt. Mở header file lên kiểm tra:
![what-elf](/assets/img/MoodyNumber.PNG)

Thấy rằng các thông số đã bị thay đổi. Tìm hiểu về định dạng [file header](https://en.wikipedia.org/wiki/Executable_and_Linkable_Format)
![changHeader](/assets/img/MoodyNumber.PNG)

Nhận xét về định dạng thì có thể thấy được header đã bị chuyển từ file 64bit về 32bit. Sửa header về 32bit. Sau đó ta mở file bằng IDA.
Sau khi mở IDA, ta thấy có hàm printFlag. Decompile hàm này ta dễ dàng thể tìm ra flag.
![resWTF](/assets/img/MoodyNumber.PNG)
FLAG
```
flag{headers_are_fun}
```
