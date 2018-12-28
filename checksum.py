#############################################
# checksum.py  Joshua Eason  12/27/2018
# simple algorithm that validates cc numbers
#############################################

def checksum(cc_number):  
    """Checks for proper length of CC number and then uses a Luhn Algorithm to validate that the number
    is valid with respect to the checksum. CC number is passed in as a string in the format "XXXX-XXXX-XXXX-XXXX" """
    check_list = [n for n in cc_number if n.isnumeric()]    
    prefix = "".join(check_list[:2])

    #checks the prefix of the cc number to verify that it meets the length requirements
    if (check_list[0]=="4" and (len(check_list)==13 or len(check_list)==16)) or ((prefix == "34" or prefix == "37") and (len(check_list)==15))\
        or ((int(prefix)>=int(51) and int(prefix)<= int(55)) and len(check_list) == 16):
    
        check_list.reverse()
        for i in range(len(check_list)):
            if (i + 1) % 2 == 0:
                check_list[i] = str(int(check_list[i])*2)
        count = 0
        for i in check_list:
            num = int(i)
            while num > 9:
                count += num // 10
                num = (num % 10)
            count += num
        if count % 10 == 0:
            return "valid number"
    return "Invalid Number"
