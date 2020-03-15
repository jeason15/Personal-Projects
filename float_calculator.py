###################################
# float_calculator.py  Joshua Eason
# 2/21/2019 
# Calculates the binary values of
# floating point numbers using the
# IEEE 754-1985 Standard.
###################################

### Program still buggy with numbers less than 1 and greater than -1.
### Need to resolve issues. 

def float_to_binary(num):
    """Converts the value of a float input to a 32 bit 
    IEEE standard binary representation returned as a string."""
    EXP_BIAS = 127
    
    binary = ""
# checks for zero.
    if num == 0:
        return "0" * 32
# checks for sign
    if num < 0:
        binary = "1"
        
    else:
        binary = "0" 
    
# gets the whole number before the decimal as a binary
    if (num >= 1) or (num <= -1):
        temp_num = int(num)
        whole_num = int_to_binary(temp_num)
        exp_value = len(whole_num) - 1
    #else:
        #exp_value = -1
        #whole_num =  
# calculates the value of exponential bits
    
    if exp_value < 0:
        exp_bits = int_to_binary(EXP_BIAS - exp_value)
    elif exp_value > 0:
        exp_bits = int_to_binary(EXP_BIAS + exp_value)

# builds up the value of the mantissa
    mantissa = whole_num[1::]
    if len(mantissa) > 23:
        mantissa = mantissa[0:23]
    decimal = num % 1
    while len(mantissa) < 23:
        decimal = decimal * 2
        if decimal < 1:
            mantissa += "0"
        else: 
            mantissa += "1"
            decimal -=1
    
# IEEE 32-bit binary value is:
# Bit 1: (sign bit)
# Bits 2-9 (exponential bits)
# Bits 10-32 (mantissa bits)
    binary += exp_bits
    binary += mantissa
    return binary




def int_to_binary(int_num):
    """Converts value of an integer to a 32 bit binary"""
    binary = ""

    if int_num < 0:
        int_num = abs(int_num)
    
    if (int_num > 0 and int_num < 1) or (type(int_num) == float):
        return "Invalid"
    elif int_num == 0:
        return "0"

    if int_num > 0:
        while int_num > 0:
            if (int_num % 2) == 0:
                binary += "0"
            else:
                binary += "1"
            int_num = int_num//2    
    binary = binary[::-1]
    return binary
