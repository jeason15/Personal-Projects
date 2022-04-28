#######################################
# matlabdata.py   Joshua Eason
# This script takes in a single data row 
# from matlab and converts it into n observances
# of 4 variables
#######################################

# This script requires that you insert a line above the data containing 4 comma separated variable names followed by a carriage return
with open("newmatrix2.txt", "r", errors = "ignore") as infile:
    i = 0
    text_line = infile.readline()
    while text_line != "":
        if i > 0:
            text_list = text_line.split(",")
        else:
            header_line = text_line
        i += 1   
        text_line = infile.readline()

for j in range(len(text_list)):
    if (j+1) % 4 == 0:
        text_list[j] += "\n"

string = ",".join(text_list)
string_list = string.split("\n")

for i in range(len(string_list)):
    string_list[i] = string_list[i].lstrip(",")
string = "\n".join(string_list)

writefile = open("fixedmatrix2", "w")

writefile.write(header_line) 
writefile.write(string)

writefile.close()
 

