@echo off
setlocal
set "NODE_EXE=C:\Program Files\nodejs\node.exe"
if not exist "%NODE_EXE%" (
  echo Node.js not found at "%NODE_EXE%"
  echo Install Node.js LTS and try again.
  exit /b 1
)

if not exist ".\node_modules\next\dist\bin\next" (
  echo Dependencies are missing. Installing...
  call "C:\Program Files\nodejs\npm.cmd" install
  if errorlevel 1 exit /b 1
)

"%NODE_EXE%" ".\node_modules\next\dist\bin\next" dev
