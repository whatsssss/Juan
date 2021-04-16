using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace Managing_Car
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
            //DataManager.Load();
            /*List<ParkingCar> cars = new List<ParkingCar>();
            cars.Add(new ParkingCar()
            {
                parkingSpot = 1,
                carNumber = "09더1590",
                driverName = "장승민",
                phoneNumber = "010-2353-4220",
                parkingTime = DateTime.Now
            }
            );*/
            dataGridView1.DataSource = DataManager.Cars;
            textBox1.Text = DataManager.Cars[0].parkingSpot.ToString();
            textBox2.Text = DataManager.Cars[0].carNumber.ToString();
            textBox3.Text = DataManager.Cars[0].driverName.ToString();
            textBox4.Text = DataManager.Cars[0].phoneNumber.ToString();

            //cars.Add(new ParkingCar());

        }

        private void timer1_Tick(object sender, EventArgs e)
        {
            WhatTime.Text = "현재 시각 : " + DateTime.Now.ToString("yyyy/MM/dd HH:mm:ss");
        }

        private void button1_Click(object sender, EventArgs e)
        {
            writeLog("1번 버튼 클릭");
            writeLog("1번 버튼 클릭",DateTime.Now.ToString("yyyy_MM_dd"));

        }

        private void button2_Click(object sender, EventArgs e)
        {
            writeLog("2번 버튼 클릭");
            writeLog("2번 버튼 클릭", DateTime.Now.ToString("yyyy_MM_dd"));


        }

        private void button3_Click(object sender, EventArgs e)
        {
            writeLog("3번 버튼 클릭");
            writeLog("3번 버튼 클릭", DateTime.Now.ToString("yyyy_MM_dd"));


        }
        private void writeLog(string contents)
        {
            string logContents = $"[{DateTime.Now.ToString("yyyy/MM/dd HH:mm:ss")}] {contents}";
            //listBox1.Items.Add(logContents);
            //옛날 것이 가장 위에 올라가는 방식

            //새로운 것이 가장 위에 올라가는 방식
            listBox1.Items.Insert(0, logContents);
            DataManager.printLog(logContents);
        }

        //writeLog() 오버로딩
        private void writeLog(string contents, string date)
        {
            string logContents = $"[{DateTime.Now.ToString("yyyy/MM/dd HH:mm:ss")}] {contents}";
           
            listBox1.Items.Insert(0, logContents);
            DataManager.printLog(logContents,date);
        }
    }
}
