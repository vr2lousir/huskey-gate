/**
 * Extensions library link
 * 
 * https://github.com/hitkuangye/CUHK_JC_iCar_V2
 */
huskylens.initI2c()
huskylens.initMode(protocolAlgorithm.ALGORITHM_FACE_RECOGNITION)
basic.forever(function () {
    huskylens.request()
    if (huskylens.isAppear(1, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        CUHK_JC_iCar.servoAngle(CUHK_JC_iCar.enServo.J2, 0)
    } else {
        CUHK_JC_iCar.servoAngle(CUHK_JC_iCar.enServo.J2, 90)
    }
    basic.pause(500)
})
