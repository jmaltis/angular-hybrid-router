LIB_TO_BUMP=$1
if [[ ! -z "$LIB_TO_BUMP" ]]; then
 echo $LIB_TO_BUMP
 cd projects && cd $LIB_TO_BUMP
 npm version patch
 cd ../../
fi
