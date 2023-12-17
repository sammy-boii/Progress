// 1. Average of an array

#include <stdio.h>

float calculateAverage(int arr[], int size)
{ // function definition
    int sum = 0;
    for (int i = 0; i < size; i++)
    {
        sum += arr[i];
    }
    return (float)sum / size;
}

int main()
{
    int size;
    printf("Enter the size of the array: ");
    scanf("%d", &size);

    int arr[size];
    printf("Enter the elements of the array:\n");
    for (int i = 0; i < size; i++)
    {
        scanf("%d", &arr[i]);
    }

    float average = calculateAverage(arr, size); // calling function
    printf("The average of the array is: %.2f\n", average);

    return 0; // kinda of a convention
}

// 2. Convert Lowercase string into Uppercase string.

#include <stdio.h>
#include <string.h> // for strlen
#include <ctype.h>  // for toupper

int main(void)
{
    char str[100];
    printf("Enter a string: ");
    fgets(str, sizeof(str), stdin); // sizeof is built in
    for (int i = 0; i < strlen(str); i++)
    {
        printf("%c", toupper(str[i]));
    }
    return 0;
}

// str is the character array, sizeof is to determine the maximum length so it don't exceed and cause buffer and shi and standard input is tells fgets to read input from console / terminal.

// 3. Take arguments from CLI

#include <stdio.h>

int main(int argc, char argv[]) // conventions
{
    if (argc < 2)
    {
        printf("Please enter at least one argument");
    }
    else
    {
        printf("hello %s", argv[1]);
    }

    return 0;
}

// argc is to count number of arguments. argv[0] is filename and argument vector is the actual argument / arguments.

// to run: gcc test.c -o new    .\new David

// 3. Linear Search

#include <stdio.h>
#include <string.h>

int main()
{
    char str[100];

    char *strings[] = {"Google", "Opera", "Internet Explorer"};
    printf("Enter a browser");
    scanf("%s", str);
    for (int i = 0; i < strlen(strings); i++)
    {
        if (strcmp(strings[i], str) == 0) // returns 0 for match
        {
            printf("Found\n");
            return 0; // returns just terminates the function
        }
    }
    printf("Not found\n");
    return 1;
}

// string itself is an array of characters so either use pointer or 2D array but 2D array can lead to memory wastage and forces u to know the max length of element. strings [4][10] so max length cannot exceed 10 including \0.

// 4. Basic structure

#include <stdio.h>

typedef struct
{
    char name[50];
    int number;
} Person;

// or

//   struct Person
//   {
//       char name[50];
//       int number;
//   } Person; and struct people [2];

int main(void)
{
    char name[50];
    Person people[2];

    strcpy(people[0].name, "Carter"); // u can't directly assign it fml
    people[0].number = 98414232304;

    strcpy(people[1].name, "Barthelomew");
    people[1].number = 92313221304;

    printf("Enter name\t");
    scanf("%s", name);

    for (int i = 0; i < 2; i++)
    {
        if (strcmp(name, people[i].name) == 0)
        {
            printf("Found\n");
            return 0;
        }
    }
    printf("Not found\n");
    return 1;
}

// 5. Swap values passing by reference.

#include <stdio.h>
void swap(int *, int *);
void main()
{
    int x = 12;
    int y = 15;
    printf("Before swapping: %d %d \n", x, y);
    swap(&x, &y);
    printf("After swapping: %d %d \n", x, y);
}
void swap(int *a, int *b)
{
    int temp = *a;
    *a = *b;
    *b = temp;
}

// we pass the address and the pointer points to that address / goes to that address and directly changes it so no need to return it. we passed the address so we can use pointers to go to that location.

// 6. Read and write in a CSV file

#include <stdio.h>
#include <stdlib.h>

int main()
{
    FILE *csvFile;
    csvFile = fopen("contacts.csv", "a+");

    if (csvFile == NULL)
    {
        printf("Unable to open file.\n");
        return 1;
    }

    fprintf(csvFile, "John Doe,1234567890\n");
    fprintf(csvFile, "Jane Smith,9876543210\n");

    fclose(csvFile);

    // Read data from the Comma Seperated Values (CSV) file. (MS-Excel)

    csvFile = fopen("contacts.csv", "r"); // Open the file in read mode

    if (csvFile == NULL)
    {
        printf("Unable to open file.\n");
        return 1;
    }

    char name[100], phoneNumber[100];

    printf("Contacts in the CSV file:\n");

    while (fscanf(csvFile, "%s %s \n", name, phoneNumber) != EOF)
    {
        printf("Name: %s, Phone Number: %s\n", name, phoneNumber);
    }

    fclose(csvFile);

    return 0;
}
