import csv
import numpy as np
import sys
import os
def readcsv(filename):	
    ifile = open(filename)
    reader = csv.reader(ifile, delimiter=";")

    rownum = 0	
    a = []

    for row in reader:
        a.append (row)
        rownum += 1
    
    ifile.close()
    return a


dirname = os.path.dirname(__file__)
data = readcsv(filename = os.path.join(dirname, 'data_soja_prat4.csv'))
label = readcsv(filename = os.path.join(dirname, 'label_soja_prat3.csv'))

alldata = np.array(data)

for j in range(2):
    for i in range(854):
        alldata[i][j] = float(data[i][j].replace(',', '.'))
for i in range(854):
    label[i][0] = float(label[i][0].replace(',', '.'))

alldata = np.float64(alldata)
label = np.float64(label)



from sklearn.model_selection import train_test_split
datasets = train_test_split(alldata, label,
                            test_size=0.2)

train_data, test_data, train_labels, test_labels = datasets
# scaling the data
from sklearn.preprocessing import StandardScaler
scaler = StandardScaler()

# we fit the train data
scaler.fit(train_data)

# scaling the train data
train_data = scaler.transform(train_data)
test_data = scaler.transform(test_data)

#print(train_data[:3])

# Creating the Model
from sklearn.neural_network import MLPClassifier
# creating an classifier from the model:
mlp = MLPClassifier(hidden_layer_sizes=(10, 10), max_iter=10000)

# Training the Model
# let's fit the training data to our model
mlp.fit(train_data, train_labels)


# Metrics the Model
from sklearn.metrics import accuracy_score

predictions_train = mlp.predict(train_data)
#print(accuracy_score(predictions_train, train_labels))
predictions_test = mlp.predict(test_data)
#print(accuracy_score(predictions_test, test_labels))

from sklearn.metrics import confusion_matrix

confusion_matrix(predictions_train, train_labels)

confusion_matrix(predictions_test, test_labels)

from sklearn.metrics import classification_report

#print(classification_report(predictions_test, test_labels))


entrada = np.array([[sys.argv[1], sys.argv[2]]])  #np.array( [ [sys.argv[1]], sys.argv[2] ])
# np.array([[3, 14], [5, 58]])
#Testando novos dados:
entrada = scaler.transform(entrada)
predictions_train = mlp.predict(entrada)
print(predictions_train[0]*3)
