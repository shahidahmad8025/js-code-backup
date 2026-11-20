@echo off
echo ============================================
echo Deleting Local User Accounts...
echo ============================================

net user "6th_Blue" /delete
net user "7th_Red" /delete
net user "7th_Blue" /delete
net user "8th_Green" /delete
net user "8th_Red" /delete
net user "9th_Green" /delete
net user "9th_Blue" /delete
net user "10th Class" /delete

echo.
echo ============================================
echo Account deletion process completed.
echo ============================================

pause
