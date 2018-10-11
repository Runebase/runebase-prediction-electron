# set vars
RUNEBASE_PATH='./node_modules/runebase-prediction-server/runebase/linux64/bin'
RPC_PW='runebaseprediction'

# start dev with Electron windows and devtools enabled
./node_modules/.bin/electron . --dev --encryptok --devtools --runebasepath=$RUNEBASE_PATH --rpcpassword=$RPC_PW 
