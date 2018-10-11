# set vars
RUNEBASE_PATH='./node_modules/runebase-prediction-server/runebase/linux64/bin'
RPC_PW='runebaseprediction'

# start dev with no Electron windows
./node_modules/.bin/electron . --dev --encryptok --noui --runebasepath=$RUNEBASE_PATH --rpcpassword=$RPC_PW 
