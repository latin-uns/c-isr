//����޽����� ���ǵ� �޽����� ����
function getMsg(msgId, paramArray) {
    return new coMessage().getMsg(msgId, paramArray);
}
//�޽����� �����ϴ� ��ü
function coMessage() {
    this.getMsg = coMessage_getMsg;
}
//����޽����� ���ǵ� �޽����� ġȯ�Ͽ� ����
function coMessage_getMsg(message, paramArray) {
    if (isNull(message.trim())) {
        return null;
    }
    var index = 0;
    var re = /@/g;
    var count = 0;
    if (paramArray == null) {
        return message;
    }
    while ((index = message.indexOf("@", index)) != -1) {
        if (paramArray[count] == null) {
            paramArray[count] = "";
        }
        message = message.substr(0, index) + String(paramArray[count]) + message.substring(index + 1);
        index = index + String(paramArray[count++]).length;
    }
    return message;
}
//nullüũ
function isNull(argValue) {
    if (argValue == null || (typeof (argValue) == "string" && argValue.trim() == "")) {
        return true;
    }
    return false;
}
//��������
String.prototype.trim = function() {
    return this.replace(/(^\s*)|(\s$)/g, "");
}