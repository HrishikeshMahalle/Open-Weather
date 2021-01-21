def subfunction(A,B,result):
    for i in range(len(A)):
        for j in range(len(A[0])):
            result[i][j] = A[i][j] + B[i][j]
    for r in result:
        print(r)

def createInput():
    n=int(input("Enter N for N x N matrix : "))   
    print("Enter the element of A")
    A = [[int(input()) for i in range(n)] for i in range(n)]                              
    print(A)
                            
    print("Enter element of B")
    B = [[int(input()) for i in range(n)] for i in range(n)]                           
    print(B)
    result = [[0 for i in range(n)] for i in range(n)]
    subfunction(A,B,result)

createInput()