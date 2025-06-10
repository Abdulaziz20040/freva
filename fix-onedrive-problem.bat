@echo off
setlocal

:: Source va target path’larni belgilaymiz
set SOURCE=%USERPROFILE%\OneDrive\Ishchi stol\my-joooobs
set TARGET=C:\Projects\my-joooobs

:: Agar manzil mavjud bo‘lmasa, uni yaratamiz
if not exist "C:\Projects" (
    mkdir C:\Projects
)

:: Loyihani yangi joyga nusxalaymiz
xcopy "%SOURCE%" "%TARGET%" /E /H /C /I /Y

:: .next papkani o‘chiramiz (agar mavjud bo‘lsa)
rd /s /q "%TARGET%\.next"

:: Yangi joyga kiramiz
cd /d "%TARGET%"

echo ----------------------------------------
echo ✅ Loyihangiz C:\Projects ga ko‘chirildi
echo ✅ .next papka tozalandi
echo ----------------------------------------
echo Endi quyidagini bajaring:
echo.
echo    cd C:\Projects\my-joooobs
echo    npm install
echo    npm run build
echo.
pause
