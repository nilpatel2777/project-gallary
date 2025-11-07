const projects = [
  {
    id: 1,
    title: "Line Follower Robot",
    category: "beginner",
    image: "https://i.imgur.com/VmXlbkO.jpeg",
    code: `# Line Follower Robot (Arduino)
int leftSensor = 2;
int rightSensor = 3;
int leftMotor1 = 4;
int rightMotor1 = 5;

void setup() {
  pinMode(leftSensor, INPUT);
  pinMode(rightSensor, INPUT);
  pinMode(leftMotor1, OUTPUT);
  pinMode(rightMotor1, OUTPUT);
}

void loop() {
  int left = digitalRead(leftSensor);
  int right = digitalRead(rightSensor);

  if (left == 0 && right == 0) {
    digitalWrite(leftMotor1, HIGH);
    digitalWrite(rightMotor1, HIGH);
  } else if (left == 1 && right == 0) {
    digitalWrite(leftMotor1, LOW);
    digitalWrite(rightMotor1, HIGH);
  } else if (left == 0 && right == 1) {
    digitalWrite(leftMotor1, HIGH);
    digitalWrite(rightMotor1, LOW);
  } else {
    digitalWrite(leftMotor1, LOW);
    digitalWrite(rightMotor1, LOW);
  }
}`
  },
  {
    id: 2,
    title: "Obstacle Avoiding Robot",
    category: "intermediate",
    image: "https://i.imgur.com/UpGWy4U.jpeg",
    code: `# Obstacle Avoiding Robot
#include <NewPing.h>
#define TRIGGER_PIN 10
#define ECHO_PIN 9
#define MAX_DISTANCE 200

NewPing sonar(TRIGGER_PIN, ECHO_PIN, MAX_DISTANCE);

void loop() {
  delay(50);
  int distance = sonar.ping_cm();
  if (distance < 20 && distance != 0) {
    // Turn robot
  } else {
    // Move forward
  }
}`
  },
  {
    id: 3,
    title: "Bluetooth Controlled Car",
    category: "advanced",
    image: "https://i.imgur.com/mtE6zFN.jpeg",
    code: `# Bluetooth Controlled Car
#include <SoftwareSerial.h>
SoftwareSerial BT(10, 11);
char command;

void setup() {
  BT.begin(9600);
  pinMode(3, OUTPUT);
  pinMode(4, OUTPUT);
}

void loop() {
  if (BT.available()) {
    command = BT.read();
    if (command == 'F') { /* Move Forward */ }
    if (command == 'B') { /* Move Backward */ }
  }
}`
  }
];
