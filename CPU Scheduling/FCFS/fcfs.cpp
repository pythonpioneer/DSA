
// Here, we are going to implement some CPU scheduling \
algo like: FCFS, SJF, SRTF, RR, PQ

// importing all requirements
#include<bits/stdc++.h>
using namespace std;

// creating a process templates
class Process{
    int waitingTime = 0;

public:
    int arrivalTime = 0;
    int burstTime = 0;

    // creatign constructors to initialize
    Process(){}
    Process(int at, int bt){
        this->arrivalTime = at;
        this->burstTime = bt;
    }

    // creating a function to initialize waiting time
    void setWaitingTime(int wt){
        this->waitingTime = wt;
    }

    // creating a function to show waiting time and other values
    void showProcessInfo(){
        cout << "Process Info(\n";    
        cout << "\tArrival Time: " << this->arrivalTime << endl;
        cout << "\tBurst Time: " << this->burstTime << endl;
        cout << "\tWaiting Time: " << this->waitingTime << endl;
        cout << ")\n";
    }
};  

// we need to sort the process by their Arrival time
bool sortByArrivalTime(Process &p1, Process &p2){
    return (p1.arrivalTime < p2.arrivalTime);
}

// sort process by their arrival time
void sortProcess(Process* p, int n){
    sort(p, p+n, sortByArrivalTime);
}

// implementing FCFS
void firstComeFirstServe(Process* p, int n){

    // first sort the processes by their arraival time
    sortProcess(p, n);

    int currentExecutionTime = 0;
    int idleTime = 0;

    // traversing in process
    for(int i=0; i<n; ){
        if(currentExecutionTime >= p[i].arrivalTime){
            p[i].setWaitingTime(currentExecutionTime - p[i].arrivalTime);
            currentExecutionTime += p[i].burstTime;
            i++;
        }
        else{
            idleTime++;
            currentExecutionTime++;
        }
    }
    cout << "Total execution time: " << currentExecutionTime << endl;
    cout << "Total idle time: " << idleTime << endl;
}

// program strts form here
int main(){

    // now initilaizing processes
    Process p1(3, 3);
    Process p2(1, 2);
    Process p3(2, 4);
    Process p4(2, 2);

    // creating an array of processes
    int n = 4;
    Process p[n] = {p1, p2, p3, p4};
    firstComeFirstServe(p, 4);

    // now display all the processes
    for(auto process: p){
        process.showProcessInfo();
    }

    return 0;
}


// end
