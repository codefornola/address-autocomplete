import csv
csvfile = open('addresses.csv')
reader = csv.DictReader(csvfile)
addresses = [row['FULLADDR'].upper() for row in reader]
with open('addresses.js', 'w') as output:
    output.write('var addresses = ')
    output.write(str(addresses))
    output.write(';')
