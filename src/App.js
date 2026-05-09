import React, { useState, useEffect } from "react";


/* ================= DATA ================= */
const defaultPages = [




  { title: "📋 Room Information - ข้อมูลห้อง",
    type: "form"
  },


  /* ================= ENTRANCE ================= */


  {
    title: "🏡 Entrance - ทางเข้า",
    items: [
      ["🌿 Garden area in front of the room", "พื้นที่สวนบริเวณหน้าห้องพัก"],
      ["🪜 Staircase to the room", "บันไดทางขึ้นห้องพัก"],
      ["🏠 Ceiling", "เพดาน"],
      ["💡 Light", "ไฟเพดาน"],
      ["🔢 Room number", "ป้ายเบอร์ห้อง"],
      ["🐒 Monkey do not disturb", "ลิงห้ามรบกวน - ทำความสะอาด"],
      ["🚪 Door", "บานประตู"],
      ["👁️ Peephole", "ตาแมว"],
      ["🔒 Onity door lock", "ล็อกประตู"],
      ["⛓️ Door security chain", "โซ่คล้องประตู"],
      ["🧱 Entrance Floor", "พื้นทางเข้า"]
    ]
  },


  /* ================= INROOM ================= */


  {
    title: "🛋️ Inroom - ภายในห้องพัก",
    items: [
      ["💳 Key card socket", "ช่องเสียบคีย์การ์ด"],
      ["🌬️ Return air", "ช่องดูดแอร์กลับ"],
      ["🗺️ Fire escape plan", "แผนที่อพยพ"],
      ["🍹 Minibar", "มินิบาร์"],
      ["💡 Light inside minibar", "ไฟด้านในตู้มินิบาร์"],
      ["🪑 Working table", "โต๊ะทำงาน"],
      ["📱 QR code scan", "ป้ายสแกนระบบ"],
      ["📶 Wifi signal", "สัญญาณไวไฟ"],
      ["🪟 Windows & door glass", "กระจกรอบห้องพัก"]
    ]
  },


  /* ================= BEDROOM ================= */


  {
    title: "🛏️ Bedroom - ภายในห้องนอน",
    items: [
      ["❄️ Air grid", "หน้ากากแอร์"],
      ["🌡️ 25 degree air temperature", "ปรับอุณหภูมิแอร์ที่ 25 องศา"],
      ["🪟 Curtain", "ม่านรอบห้อง"],
      ["💡 Light", "โคมไฟเพดานห้องนอน"],
      ["🏠 Gypsum ceiling", "เพดานยิปซั่ม"],
      ["🪵 Wood ceiling", "เพดานไม้ท้องเรือ"],
      ["🛏️ Bed side lamp", "ไฟหัวเตียง"],
      ["🛌 Bed", "เตียงนอน"],
      ["☎️ Telephone", "โทรศัพท์"],
      ["✏️ Note pad & pencil", "กระดาษและดินสอ"],
      ["🪑 Furniture", "เฟอร์นิเจอร์"],
      ["🛋️ Day bed", "โซฟาเตียงนอน"],
      ["🪵 Parquet floor", "พื้นไม้ปาเก้"],
      ["📺 TV", "ทีวี"],
      ["🔊 Speaker", "ลำโพง"]
    ]
  },


  /* ================= BALCONY ================= */


  {
    title: "🌅 Balcony - ทางออกระเบียง",
    items: [
      ["🚪 Door", "ประตูทางออกไปศาลา"],
      ["🪵 Wood floor", "พื้นไม้"],
      ["🧱 Terracotta floor", "พื้นกระเบื้องดินเผา"],
      ["🌀 Fan ceiling", "พัดลมเพดานศาลา"],
      ["💡 Down lights", "ไฟเพดาน"],
      ["🏊 Pool lights", "ไฟสระน้ำ"],
      ["🌿 Garden", "สวนรอบ ๆ ทั้งหมด"],
      ["🧱 Brick", "อิฐมอญ"],
      ["💧 Waterfall", "น้ำตก"],
      ["🌊 Overflowing grid", "ตะแกรงน้ำล้น"],
      ["🧱 Plaster wall", "ผนังปูนศาลา"],
      ["🪵 Woodle floor at the terrace", "พื้นไม้ที่ระเบียง"]
    ]
  },


  /* ================= BATHROOM ================= */


  {
    title: "🚿 Bathroom - ภายในห้องน้ำ",
    items: [
      ["🚪 Door", "ประตูทางออกสระน้ำ"],
      ["🚿 Rain shower", "ฝักบัวแบบสายฝน"],
      ["🚿 Hand shower", "ฝักบัวมือจับ"],
      ["🚰 Shower water tap", "ก็อกน้ำ"],
      ["🧱 Terracotta floor", "พื้นกระเบื้องดินเผา"],
      ["🪨 Terrazzo", "ผนังหินขัด"],
      ["🛁 Bathtub", "อ่างอาบน้ำ"],
      ["🧴 Shampoo, foam bath, body lotion", "ที่วางสบู่ แชมพู"],
      ["🪵 Step woodle floor to Jacuzzi", "พื้นไม้สองขั้นขึ้นไปอ่างอาบน้ำ"],
      ["🚽 Toilet bowl", "ชักโครก"],
      ["🚿 Bidet shower", "สายฉีดชำระ"],
      ["🗑️ Bin", "ถังขยะ"],
      ["☎️ Bath tel", "โทรศัพท์ภายในห้องน้ำ"],
      ["🪜 Ladder for towel", "บันไดสำหรับผ้าเช็ดตัว"],
      ["🚰 Basin counter", "เคาน์เตอร์อ่างล้างหน้า"],
      ["🚰 Sink", "อ่างล้างหน้า"],
      ["🪑 Stool chair", "เก้าอี้"],
      ["📦 Amenities box", "กล่องอมินิตี้"],
      ["🚰 Sink water tap", "ก็อกอ่างล้างหน้า"],
      ["🪞 Magnifying mirror", "กระจกขยายแต่งหน้า"],
      ["🪟 Windows", "หน้าต่าง"],
      ["🧥 Hangers", "ไม้แขวนเสื้อ"],
      ["🏖️ Beach bag", "กระเป๋าชายหาด"],
      ["👕 Wardrobe", "ตู้เสื้อผ้า"],
      ["🔐 Safety box", "ตู้เซฟ"],
      ["💨 Hair dryer", "เครื่องเป่าผม"],
      ["🥿 Slipper", "รองเท้าแตะ"],
      ["🧺 Laundry bag", "ถุงผ้าลอนดรี"],
      ["☂️ Umbrella", "ร่มกันฝน"],
      ["🪵 Wood ceiling", "เพดานไม้"],
      ["🪵 Wood floor", "พื้นไม้"],
      ["🪵 Wood curtain", "มูลี่ไม้"]
    ]
  },


  /* ================= PANTRY ================= */


  {
    title: "🍳 Pantry on the third floor - ห้องครัวชั้น 3",
    items: [
      ["🔥 Electric stove", "เตาไฟฟ้า"],
      ["🚰 Sink", "อ่างล้างมือ"],
      ["🧥 Hanger", "ที่แขวน"],
      ["📦 Microwave", "ตู้อบไมโครเวฟ"],
      ["🪵 Woodle floor at the terrace", "พื้นไม้ที่ระเบียง"]
    ]
  },


  /* ================= LIVING ROOM ================= */


  {
    title: "🛋️ Living room - ห้องนั่งเล่นชั้น 3",
    items: [
      ["🛋️ Sofa", "โซฟา"],
      ["🧱 Floor", "พื้น"],
      ["🪟 Curtain", "ม่าน"],
      ["🏠 Ceiling", "เพดาน"],
      ["❄️ Air grid", "หน้ากากแอร์"],
      ["💡 Lights", "ไฟฟ้าภายในห้อง"],
      ["🚰 Sink", "อ่างล้างหน้า"],
      ["🪜 Ladder for towel", "บันไดสำหรับผ้าเช็ดตัว"],
      ["🧥 Hangers", "ไม้แขวนเสื้อ"],
      ["🚽 Toilet bowl", "ชักโครก"],
      ["🚿 Outdoor shower", "ฝักบัวอาบน้ำกลางแจ้ง"],
      ["📺 TV", "ทีวี"]
    ]
  },


  /* ================= OTHER ================= */


  {
    title: "📝 Other - อื่นๆ",
    items: [
      ["🛠️ Other issue 1", "โปรดระบุ"],
      ["🛠️ Other issue 2", "โปรดระบุ"],
      ["🛠️ Other issue 3", "โปรดระบุ"]
    ]
  }


];




/* ================= APP ================= */
/* ================= APP ================= */
export default function App() {
  const [pagesData, setPagesData] = useState(() => {
  const saved = localStorage.getItem("pagesData");


  return saved
    ? JSON.parse(saved)
    : defaultPages;
});


useEffect(() => {
  localStorage.setItem(
    "pagesData",
    JSON.stringify(pagesData)
  );
}, [pagesData]);


const [newPageTitle, setNewPageTitle] =
  useState("");


const [newQuestion, setNewQuestion] =
  useState("");


const [newQuestionTH, setNewQuestionTH] =
  useState("");


  const [currentPage, setCurrentPage] = useState(0);


  const [isLogin, setIsLogin] = useState(false);


  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [newAdminUser, setNewAdminUser] = useState("");
  const [newAdminPass, setNewAdminPass] = useState("");


  const [admins, setAdmins] = useState(() => {
  const saved = localStorage.getItem("admins");


  return saved
    ? JSON.parse(saved)
    : [
        {
          username: "admin",
          password: "1234"
        }
      ];
});


  // โหลดข้อมูลจาก localStorage
  // โหลดข้อมูลจาก localStorage
const [submissions, setSubmissions] = useState(() => {
  const saved = localStorage.getItem("roomCheckData");

  return saved ? JSON.parse(saved) : [];
});

// save ลง localStorage
useEffect(() => {
  localStorage.setItem(
    "roomCheckData",
    JSON.stringify(submissions)
  );
}, [submissions]);

  // ค้นหาห้อง
  const [searchRoom, setSearchRoom] = useState("");


  // ดูรายละเอียด
  const [selectedReport, setSelectedReport] = useState(null);


  // เมนู sidebar
  const [activeMenu, setActiveMenu] = useState("forms");


  // dropdown animation
  const [showDropdown, setShowDropdown] = useState(false);


  // answers/comments
  const [answers, setAnswers] = useState({});
  const [comments, setComments] = useState({});


  // room info
  const [info, setInfo] = useState({
    room: "",
    date: "",
    time: "",
    name: "",
    position: ""
  });


  /* ================= LOGIN ================= */


 const handleLogin = () => {


  const foundAdmin = admins.find(
    (a) =>
      a.username === username &&
      a.password === password
  );


  if (foundAdmin) {


    setIsLogin("admin");


  } else {


    alert("❌ Username หรือ Password ไม่ถูกต้อง");


  }


};


  /* ================= SUBMIT ================= */


  const handleSubmit = () => {


  const data = {
    id: Date.now(),


    info: {
      room: info.room,
      date: info.date,
      time: info.time,
      name: info.name,
      position: info.position
    },


    answers,
    comments
  };


  // บันทึกเข้า submissions
  setSubmissions((prev) => [data, ...prev]);


  alert("✅ ส่งแบบประเมินเรียบร้อย!");


  // รีเซ็ตฟอร์ม
  setAnswers({});
  setComments({});


  setInfo({
    room: "",
    date: "",
    time: "",
    name: "",
    position: ""
  });


  setCurrentPage(0);


  // กลับหน้า login
  setIsLogin(false);
};


  /* ================= ADMIN PAGE ================= */


  if (isLogin === "admin") {


    return (


      <div
        style={{
          display: "flex",
          minHeight: "100vh",
          background: "#f1f5f9"
        }}
      >


        {/* SIDEBAR */}
        <div style={styles.sidebar}>


          <div style={styles.sidebarLogo}>


            <img
              src="/logo.png"
              alt="logo"
              style={{ width: 60 }}
            />


            <h3>Muang Samui</h3>


          </div>


          <div
            style={
              activeMenu === "overview"
                ? styles.menuActive
                : styles.menuItem
            }
            onClick={() => setActiveMenu("overview")}
          >
            🏠 Overview
          </div>


          <div
            style={
              activeMenu === "users"
                ? styles.menuActive
                : styles.menuItem
            }
            onClick={() => setActiveMenu("users")}
          >
            👥 User Management
          </div>


          <div
            style={
              activeMenu === "forms"
                ? styles.menuActive
                : styles.menuItem
            }
            onClick={() => setActiveMenu("forms")}
          >
            📋 Form Responses
          </div>


          <div
            style={
              activeMenu === "reports"
                ? styles.menuActive
                : styles.menuItem
            }
            onClick={() => setActiveMenu("reports")}
          >
            📊 Reports
          </div>


          <div
            style={
              activeMenu === "settings"
                ? styles.menuActive
                : styles.menuItem
            }
            onClick={() => setActiveMenu("settings")}
          >
            ⚙️ Settings
          </div>
          <div
            style={
              activeMenu === "manageForms"
                ? styles.menuActive
                : styles.menuItem
            }
            onClick={() => setActiveMenu("manageForms")}
          >
            📝 Manage Forms
          </div>
         


        </div>


        {/* CONTENT */}
        <div style={{ flex: 1, padding: 20 }}>


          <div style={styles.adminHeader}>


            <h2>Admin Dashboard</h2>


            <button
              style={styles.logoutBtn}
              onClick={() => setIsLogin(false)}
            >
              Logout
            </button>


          </div>


 {/* 📊 OVERVIEW DASHBOARD */}
{activeMenu === "overview" && (
  <div style={styles.dashboardWrap}>


    <div style={styles.dashboardHeader}>
      <h1 style={{ margin: 0 }}>
        📋 Admin Dashboard
      </h1>


      <div style={{ fontSize: 28 }}>
        👋 Hello, Admin !
      </div>
    </div>


    {/* STATS */}
    <div style={styles.statsGrid}>


      <div style={styles.fancyCardBlue}>
        <div style={styles.cardTop}>
          <h1>{submissions.length}</h1>
          <span style={{ fontSize: 40 }}>📄</span>
        </div>


        <h3>Total Reports</h3>


        <p>
          จำนวนแบบประเมินทั้งหมด
        </p>
      </div>


      <div style={styles.fancyCardGreen}>
        <div style={styles.cardTop}>
          <h1>{submissions.length}</h1>
          <span style={{ fontSize: 40 }}>✅</span>
        </div>


        <h3>Completed Checks</h3>


        <p>
          ห้องที่ตรวจผ่าน
        </p>
      </div>


      <div style={styles.fancyCardRed}>
        <div style={styles.cardTop}>
          <h1>
            {
              submissions.filter((s) =>
                Object.values(s.answers).includes("No")
              ).length
            }
          </h1>


          <span style={{ fontSize: 40 }}>⚠️</span>
        </div>


        <h3>Problem Rooms</h3>


        <p>
          จำนวนห้องที่มีปัญหา
        </p>
      </div>


      <div style={styles.fancyCardDark}>
        <div style={styles.cardTop}>
          <h1>{submissions.length}</h1>
          <span style={{ fontSize: 40 }}>📝</span>
        </div>


        <h3>Total Forms</h3>


        <p>
          จำนวนแบบฟอร์มทั้งหมด
        </p>
      </div>


    </div>


    {/* DETAIL AREA */}
    <div style={styles.detailGrid}>


      {/* LEFT */}
      <div style={styles.graphCard}>


        <h2>📈 Report Trends</h2>


        <div style={styles.fakeGraph}>
          <div style={styles.graphLine}></div>
        </div>


        {submissions[0] && (
          <div style={{ marginTop: 25 }}>


            <p>👤 {submissions[0].info.name}</p>


            <p>🧑‍💼 {submissions[0].info.position}</p>


            <p>📅 {submissions[0].info.date}</p>


            <p>⏰ {submissions[0].info.time}</p>


          </div>
        )}


      </div>


      {/* RIGHT */}
      <div style={styles.roomCard}>


        <h1>
          🏠 Room {submissions[0]?.info.room || "-"} Inspection
        </h1>


        {submissions[0] &&
          Object.entries(submissions[0].answers).map(
            ([q, a], i) => (


              <div
                key={i}
                style={{
                  ...styles.answerBox,


                  background:
                    a === "Yes"
                      ? "#dcfce7"
                      : "#fee2e2"
                }}
              >


                <div>
                  {a === "Yes" ? "✅" : "❌"} {q}
                </div>


                <div
                  style={{
                    fontWeight: "bold"
                  }}
                >
                  {a}
                </div>


              </div>


            )
          )}


      </div>


    </div>


  </div>
)}


          {/* USERS */}
          {activeMenu === "users" && (


            <div style={styles.pageBox}>


              <h2>User Management</h2>


              {submissions.map((item, index) => (


                <div
                  key={index}
                  style={styles.userCard}
                >
                  👤 {item.info.name}
                </div>


              ))}


            </div>


          )}


          {/* FORMS */}
          {activeMenu === "forms" && (


            <div style={styles.pageBox}>


              <h2>Form Responses</h2>


              <input
                style={styles.input}
                placeholder="🔍 Search Room"
                value={searchRoom}
                onChange={(e) =>
                  setSearchRoom(e.target.value)
                }
              />


              {submissions
                .filter((item) =>
                  item.info.room
                    ?.toLowerCase()
                    .includes(
                      searchRoom.toLowerCase()
                    )
                )
                .map((item, index) => (


                  <div
                    key={index}
                    style={styles.reportCard}
                  >


                   <h3>🏠 Room: {item.info.room}</h3>


                  <p>👤 {item.info.name}</p>


                  <p>📅 {item.info.date}</p>


                  <p>⏰ {item.info.time}</p>


                  <p>💼 {item.info.position}</p>


                  <button
                    style={styles.viewBtn}
                    onClick={() =>
                      setSelectedReport(item)
                    }
                  >
                    View
                  </button>


                  </div>


                ))}


            </div>


          )}


          {/* REPORTS */}
{activeMenu === "reports" && (


  <div style={styles.pageBox}>


    <h1
      style={{
        marginBottom: 25,
        fontSize: 32
      }}
    >
      📊 Reports Dashboard
    </h1>


    {/* TOP CARDS */}
    <div style={styles.statsGrid}>


      <div
        style={{
          ...styles.fancyCardBlue
        }}
      >
        <div style={styles.cardTop}>
          <h1>{submissions.length}</h1>
          <span style={{ fontSize: 45 }}>
            📄
          </span>
        </div>


        <h3>Total Reports</h3>


        <p>
          จำนวนแบบประเมินทั้งหมด
        </p>
      </div>


      <div
        style={{
          ...styles.fancyCardGreen
        }}
      >
        <div style={styles.cardTop}>
          <h1>
            {
              submissions.filter((s) =>
                Object.values(s.answers)
                  .includes("Yes")
              ).length
            }
          </h1>


          <span style={{ fontSize: 45 }}>
            ✅
          </span>
        </div>


        <h3>Completed Checks</h3>


        <p>
          ห้องที่ตรวจผ่าน
        </p>
      </div>


      <div
        style={{
          ...styles.fancyCardRed
        }}
      >
        <div style={styles.cardTop}>
          <h1>
            {
              submissions.filter((s) =>
                Object.values(s.answers)
                  .includes("No")
              ).length
            }
          </h1>


          <span style={{ fontSize: 45 }}>
            ⚠️
          </span>
        </div>


        <h3>Problem Rooms</h3>


        <p>
          ห้องที่พบปัญหา
        </p>
      </div>


      <div
        style={{
          ...styles.fancyCardDark
        }}
      >
        <div style={styles.cardTop}>
          <h1>
            {submissions.length}
          </h1>


          <span style={{ fontSize: 45 }}>
            🏨
          </span>
        </div>


        <h3>Hotel Rooms</h3>


        <p>
          สรุปรายงานทั้งหมด
        </p>
      </div>


    </div>


    {/* REPORT LIST */}
    <div
      style={{
        marginTop: 30
      }}
    >


      <h2 style={{ marginBottom: 20 }}>
        📝 Latest Reports
      </h2>


      {submissions.map((item, index) => (


        <div
          key={index}
          style={{
            background: "#fff",
            padding: 20,
            borderRadius: 20,
            marginBottom: 20,
            boxShadow:
              "0 5px 20px rgba(0,0,0,0.08)",
            border:
              "1px solid #e2e8f0"
          }}
        >


          <div
            style={{
              display: "flex",
              justifyContent:
                "space-between",
              alignItems: "center"
            }}
          >


            <div>


              <h2
                style={{
                  marginBottom: 10
                }}
              >
                🏠 Room {item.info.room}
              </h2>


              <p>
                👤 <b>{item.info.name}</b>
              </p>


              <p>
                📅 {item.info.date}
              </p>


              <p>
                ⏰ {item.info.time}
              </p>


              <p>
                💼 {item.info.position}
              </p>


            </div>


            <div
              style={{
                fontSize: 60
              }}
            >
              🏨
            </div>


          </div>


          <div
            style={{
              marginTop: 20,
              display: "flex",
              gap: 10
            }}
          >


            <button
              style={{
                padding: "10px 18px",
                border: "none",
                borderRadius: 12,
                background: "#3b82f6",
                color: "#fff",
                cursor: "pointer",
                fontWeight: "bold"
              }}
              onClick={() =>
                setSelectedReport(item)
              }
            >
              👁 View Report
            </button>


          </div>


        </div>


      ))}


    </div>


  </div>


)}
{/* MANAGE FORMS */}
{activeMenu === "manageForms" && (


  <div
    style={{
      display: "grid",
      gridTemplateColumns: "350px 1fr",
      gap: 20
    }}
  >


    {/* LEFT */}
    <div>


      {/* ADD FORM */}
      <div style={styles.pageBox}>


        <h2 style={{ marginBottom: 20 }}>
          ➕ เพิ่มหมวดหมู่ใหม่
        </h2>


        <input
          style={styles.input}
          placeholder="ชื่อหมวดหมู่"
          value={newPageTitle}
          onChange={(e) =>
            setNewPageTitle(e.target.value)
          }
        />


        <input
          style={styles.input}
          placeholder="Question English"
          value={newQuestion}
          onChange={(e) =>
            setNewQuestion(e.target.value)
          }
        />


        <input
          style={styles.input}
          placeholder="คำถามภาษาไทย"
          value={newQuestionTH}
          onChange={(e) =>
            setNewQuestionTH(e.target.value)
          }
        />


        <button
          style={{
            ...styles.loginBtn,
            marginTop: 15
          }}
          onClick={() => {


            if (
              !newPageTitle ||
              !newQuestion ||
              !newQuestionTH
            ) {
              alert("❌ กรุณากรอกข้อมูล");
              return;
            }


            const newPage = {
              title: newPageTitle,
              items: [
                [newQuestion, newQuestionTH]
              ]
            };


            setPagesData([
              ...pagesData,
              newPage
            ]);


            setNewPageTitle("");
            setNewQuestion("");
            setNewQuestionTH("");


            alert("✅ เพิ่มแบบสอบถามแล้ว");


          }}
        >
          ➕ Add Category
        </button>


      </div>


      {/* SUMMARY */}
      <div
        style={{
          ...styles.pageBox,
          marginTop: 20
        }}
      >


        <h3>📋 หมวดหมู่ทั้งหมด</h3>


        {pagesData.map((page, index) => (


          <div
            key={index}
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "10px 0",
              borderBottom:
                "1px solid #e2e8f0"
            }}
          >


            <span>{page.title}</span>


            <b>
              {page.items?.length || 0}
            </b>


          </div>


        ))}


      </div>


    </div>


    {/* RIGHT */}
    <div style={styles.pageBox}>


      <h2 style={{ marginBottom: 20 }}>
        📝 รายการหมวดหมู่และคำถามทั้งหมด
      </h2>


      {pagesData.map((page, index) => (


  <div
    key={index}
    style={{
      background: "#fff",
      border: "1px solid #e2e8f0",
      borderRadius: 18,
      padding: 20,
      marginBottom: 15,
      boxShadow:
        "0 4px 12px rgba(0,0,0,0.04)"
    }}
  >


    {/* HEADER */}
    <div
      style={{
        display: "flex",
        justifyContent:
          "space-between",
        alignItems: "center",
        cursor: "pointer"
      }}
      onClick={() => {


        setPagesData(
          pagesData.map((p, i) => {


            if (i === index) {


              return {
                ...p,
                open: !p.open
              };


            }


            return p;


          })
        );


      }}
    >


      <div>


        <h3 style={{ margin: 0 }}>
          {page.title}
        </h3>


        <p
          style={{
            color: "#64748b",
            marginTop: 5
          }}
        >
          {page.items?.length || 0} Questions
        </p>


      </div>


      <div
        style={{
          display: "flex",
          gap: 10,
          alignItems: "center"
        }}
      >

        {/* DELETE CATEGORY */}
        <button
          style={{
            background: "#ef4444",
            color: "#fff",
            border: "none",
            padding: "8px 12px",
            borderRadius: 8,
            cursor: "pointer",
            fontWeight: "bold"
          }}
          onClick={(e) => {

            e.stopPropagation();

            const confirmDelete =
              window.confirm(
                "ต้องการลบหมวดหมู่นี้ ?"
              );

            if (!confirmDelete) return;

            const updated =
              pagesData.filter(
                (_, i) => i !== index
              );

            setPagesData(updated);

          }}
        >
          🗑
        </button>

        <div
          style={{
            fontSize: 24,
            fontWeight: "bold"
          }}
        >
          {page.open ? "▲" : "▼"}
        </div>

</div>


    </div>


    {/* QUESTION LIST */}
    {page.open && (


      <div style={{ marginTop: 20 }}>


        {page.items?.map((q, qIndex) => (


  <div
    key={qIndex}
    style={{
      background: "#f8fafc",
      border: "1px solid #e2e8f0",
      borderRadius: 12,
      padding: 12,
      marginBottom: 10
    }}
  >


    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}
    >


      <div>


        <div
          style={{
            fontWeight: "bold",
            marginBottom: 5
          }}
        >
          {qIndex + 1}. {q[0]}
        </div>


        <div
          style={{
            color: "#64748b",
            fontSize: 14
          }}
        >
          {q[1]}
        </div>


      </div>


      <div
        style={{
          display: "flex",
          gap: 8
        }}
      >


        {/* EDIT */}
        <button
          style={{
            background: "#3b82f6",
            color: "#fff",
            border: "none",
            padding: "8px 12px",
            borderRadius: 8,
            cursor: "pointer",
            fontWeight: "bold"
          }}
          onClick={() => {


            const eng = prompt(
              "Edit English Question",
              q[0]
            );


            const th = prompt(
              "แก้ไขคำถามภาษาไทย",
              q[1]
            );


            if (!eng || !th) return;


            const updated = [...pagesData];


            updated[index].items[qIndex] = [
              eng,
              th
            ];


            setPagesData(updated);


          }}
        >
          ✏️
        </button>


        {/* DELETE */}
        <button
          style={{
            background: "#ef4444",
            color: "#fff",
            border: "none",
            padding: "8px 12px",
            borderRadius: 8,
            cursor: "pointer",
            fontWeight: "bold"
          }}
          onClick={() => {


            const updated = [...pagesData];


            updated[index].items =
              updated[index].items.filter(
                (_, i) => i !== qIndex
              );


            setPagesData(updated);


          }}
                >
          🗑
        </button>


      </div>
    </div>


  </div>


))}


      </div>


    )}


  </div>


))}


    </div>


  </div>


)}


{/* SETTINGS */}
{activeMenu === "settings" && (
  <div style={styles.pageBox}>


    <h2>⚙️ Settings</h2>


    {/* ADMIN ACCOUNT */}
    <div style={styles.card}>


      <h3>👑 Admin Accounts</h3>


      {admins.map((admin, i) => (


        <div
          key={i}
          style={{
            background: "#f8fafc",
            padding: 15,
            borderRadius: 12,
            marginTop: 10,
            border: "1px solid #dbeafe",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >


          <div>


            <p>
              👤 Username :
              <b> {admin.username}</b>
            </p>


            <p>
              🔑 Password :
              <b> {admin.password}</b>
            </p>


          </div>


          <button
            style={{
              background: "#ef4444",
              color: "#fff",
              border: "none",
              padding: "10px 14px",
              borderRadius: 10,
              cursor: "pointer",
              fontWeight: "bold"
            }}
            onClick={() => {


              if (admins.length === 1) {


                alert("❌ ต้องมีแอดมินอย่างน้อย 1 คน");
                return;


              }


              const updatedAdmins =
                admins.filter(
                  (_, index) => index !== i
                );


              setAdmins(updatedAdmins);


              alert("🗑 ลบแอดมินแล้ว");


            }}
          >
            🗑 Delete
          </button>


        </div>


      ))}


    </div>


    {/* CREATE ADMIN */}
    <div style={styles.card}>


      <h3>➕ Create New Admin</h3>


      <input
        style={styles.input}
        placeholder="New Username"
        value={newAdminUser}
        onChange={(e) =>
          setNewAdminUser(e.target.value)
        }
      />


      <input
        style={styles.input}
        placeholder="New Password"
        value={newAdminPass}
        onChange={(e) =>
          setNewAdminPass(e.target.value)
        }
      />


      <button
        style={{
          ...styles.loginBtn,
          marginTop: 15
        }}
        onClick={() => {


          if (
            !newAdminUser ||
            !newAdminPass
          ) {


            alert("❌ กรอกข้อมูลให้ครบ");
            return;


          }


          const already = admins.find(
            (a) =>
              a.username === newAdminUser
          );


          if (already) {


            alert("❌ Username นี้มีแล้ว");
            return;


          }


          setAdmins([
            ...admins,
            {
              username: newAdminUser,
              password: newAdminPass
            }
          ]);


          alert("✅ เพิ่มแอดมินสำเร็จ");


          setNewAdminUser("");
          setNewAdminPass("");


        }}
      >
        ➕ Add Admin
      </button>


    </div>


    {/* DATABASE */}
    <div style={styles.card}>


      <h3>🗂 Database</h3>


      <p>
        📋 Total Stored Forms :
        <b> {submissions.length}</b>
      </p>


      <button
        style={{
          ...styles.logoutBtn,
          marginTop: 15
        }}
        onClick={() => {


          localStorage.removeItem(
            "roomCheckData"
          );


          setSubmissions([]);


          alert("🗑 ลบข้อมูลทั้งหมดแล้ว");


        }}
      >
        🗑 Delete All Data
      </button>


    </div>


  </div>
)}


          {/* DETAIL */}
         {selectedReport && (


          <div style={styles.detailPanel}>


            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
              }}
            >


              <h2>
                Room {selectedReport.info.room}
              </h2>


              <button
                style={{
                  padding: "10px 15px",
                  border: "none",
                  borderRadius: 10,
                  background: "#ef4444",
                  color: "#fff",
                  cursor: "pointer",
                  fontWeight: "bold"
                }}
                onClick={() => setSelectedReport(null)}
              >
                ✖ Close
              </button>


            </div>


              {Object.entries(
                selectedReport.answers
              ).map(([q, a], i) => (


                <div
                  key={i}
                  style={{
                    padding: 10,
                    marginTop: 10,
                    borderRadius: 10,
                    background:
                      a === "No"
                        ? "#fee2e2"
                        : "#dcfce7"
                  }}
                >


                  <b>{q}</b>


                  <div>
                    {a === "Yes"
                      ? "✅ Yes"
                      : "❌ No"}
                  </div>


                  <small>
                    {selectedReport.comments[q]}
                  </small>


                </div>


              ))}


            </div>


          )}


        </div>


      </div>


    );


  }


  /* ================= LOGIN PAGE ================= */


  if (!isLogin) {


    return (


      <div style={styles.loginContainer}>


        <div style={styles.loginCard}>


          <img
            src="/logo.png"
            alt="logo"
            style={{ width: 120, marginBottom: 15 }}
          />


          <h2 style={{ marginBottom: 10 }}>
            💙 Muang Samui Group
          </h2>


          <p style={{ color: "#666", marginBottom: 20 }}>
            Room Check List Login
          </p>


          <input
            type="text"
            placeholder="Enter username"
            style={styles.loginInput}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />


          <input
            type="password"
            placeholder="Enter password"
            style={styles.loginInput}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />


          <button
            style={styles.loginBtn}
            onClick={handleLogin}
          >
            Login
          </button>


          <button
            style={styles.formBtn}
            onClick={() => setIsLogin("form")}
          >
            📋 Open Form
          </button>


        </div>


      </div>


    );


  }


  /* ================= FORM PAGE ================= */


const activePage = pagesData[currentPage];


  return (


    <div style={styles.container}>


      <div style={styles.header}>


        <img src="/logo.png" alt="logo" />


        <h2 style={{ margin: 0 }}>
          💙 Muang Samui Group Room Check List
        </h2>


      </div>


      <h3 style={{ marginTop: 20 }}>
        {activePage.title}
      </h3>


      {/* PROGRESS */}
      <div style={styles.progressWrap}>


        <div
          style={{
            ...styles.progressIn,
            width: `${((currentPage + 1) / pagesData.length) * 100}%`
          }}
        />


      </div>


      {/* FORM PAGE */}
{activePage.type === "form" ? (


  <div style={styles.card}>


    <label>Room number หมายเลขห้อง</label>


    <input
      placeholder="Enter room number"
      style={styles.input}
      value={info.room}
      onChange={(e) =>
        setInfo({
          ...info,
          room: e.target.value
        })
      }
    />


    <label>Date วันที่</label>


    <input
      type="date"
      style={styles.input}
      value={info.date}
      onChange={(e) =>
        setInfo({
          ...info,
          date: e.target.value
        })
      }
    />


    <label>Time เวลา</label>


    <input
      type="time"
      style={styles.input}
      value={info.time}
      onChange={(e) =>
        setInfo({
          ...info,
          time: e.target.value
        })
      }
    />


    {/* POSITION */}
    <label>Position ตำแหน่ง</label>


    <div style={styles.dropdown}>


      <div
        style={styles.dropdownBox}
        onClick={() =>
          setShowDropdown(!showDropdown)
        }
      >


        <span>
          {info.position || "-- Select Position --"}
        </span>


        <span
          style={{
            ...styles.arrow,
            transform: showDropdown
              ? "rotate(180deg)"
              : "rotate(0deg)"
          }}
        >
          ⌄
        </span>


      </div>


      <div
        style={{
          ...styles.dropdownMenu,
          maxHeight: showDropdown ? 200 : 0,
          opacity: showDropdown ? 1 : 0
        }}
      >


        {[
          "MGR",
          "ASST.MGR",
          "SUPER",
          "On behalf of head"
        ].map((item) => (


          <div
            key={item}
            style={styles.dropdownItem}
            onClick={() => {


              setInfo({
                ...info,
                position: item
              });


              setShowDropdown(false);


            }}
          >
            {item}
          </div>


        ))}


      </div>


    </div>


    <label>Name ชื่อผู้ตรวจ</label>


    <input
      placeholder="Enter your name"
      style={styles.input}
      value={info.name}
      onChange={(e) =>
        setInfo({
          ...info,
          name: e.target.value
        })
      }
    />


  </div>


) : (


  activePage.items.map((item, idx) => (


    <div
      key={idx}
      style={styles.card}
    >


      <b>
        {idx + 1}. {item[0]}
      </b>


      <div
        style={{
          fontSize: 12,
          color: "#666",
          marginTop: 5
        }}
      >
        {item[1]}
      </div>


      {/* YES / NO */}
      <div
        style={{
          display: "flex",
          gap: 10,
          marginTop: 15
        }}
      >


        <button
          style={{
            ...styles.btn,
            background:
              answers[`${activePage.title}-${item[0]}`] === "Yes"
                ? "#22c55e"
                : "#f1f5f9",
            color:
              answers[`${activePage.title}-${item[0]}`] === "Yes"
                ? "#fff"
                : "#333"
          }}
          onClick={() =>
            setAnswers({
              ...answers,
              [`${activePage.title}-${item[0]}`]: "Yes"
            })
          }
        >
          ✅ Yes
        </button>


        <button
          style={{
            ...styles.btn,
            background:
              answers[`${activePage.title}-${item[0]}`] === "No"
                ? "#ef4444"
                : "#f1f5f9",
            color:
              answers[`${activePage.title}-${item[0]}`] === "No"
                ? "#fff"
                : "#333"
          }}
          onClick={() =>
            setAnswers({
              ...answers,
              [`${activePage.title}-${item[0]}`]: "No"
            })
          }
        >
          ❌ No
        </button>


      </div>


      {/* COMMENT */}
      <input
        style={styles.input}
        placeholder="Comment..."
        value={comments[`${activePage.title}-${item[0]}`] || ""}
        onChange={(e) =>
          setComments({
            ...comments,
            [`${activePage.title}-${item[0]}`]: e.target.value
          })
        }
      />


    </div>


  ))


)}


      {/* NAV */}
      <div style={{ display: "flex", gap: 10 }}>


        {currentPage > 0 && (


          <button
            style={styles.navBtn}
            onClick={() =>
              setCurrentPage(currentPage - 1)
            }
          >
            Back
          </button>


        )}


        {currentPage < pagesData.length - 1 ? (


          <button
            style={styles.navBtn}
            onClick={() =>
              setCurrentPage(currentPage + 1)
            }
          >
            Next →
          </button>


        ) : (


          <button
            style={styles.submitBtn}
            onClick={handleSubmit}
          >
            Submit
          </button>


        )}


      </div>


    </div>


  );


}


const styles = {

  /* ================= FORM ================= */

  container: {
    maxWidth: 650,
    margin: "auto",
    padding: 25,
    fontFamily: "Inter, sans-serif",
    background: "#f8fafc",
    minHeight: "100vh"
  },

  header: {
    background: "#ffffff",
    padding: 25,
    borderRadius: 24,
    textAlign: "center",
    boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
    border: "1px solid #e2e8f0"
  },

  logo: {
    width: 100,
    marginBottom: 10
  },

  card: {
    background: "#ffffff",
    padding: 20,
    marginTop: 18,
    borderRadius: 22,
    border: "1px solid #e2e8f0",
    boxShadow: "0 4px 15px rgba(0,0,0,0.04)"
  },

  input: {
    width: "100%",
    padding: 14,
    marginTop: 10,
    borderRadius: 14,
    border: "1px solid #dbeafe",
    background: "#f8fafc",
    outline: "none",
    fontSize: 15,
    boxSizing: "border-box"
  },

  btn: {
    flex: 1,
    padding: 14,
    border: "none",
    borderRadius: 14,
    cursor: "pointer",
    fontWeight: "600",
    fontSize: 15,
    transition: "0.2s"
  },

  navBtn: {
    flex: 1,
    padding: 14,
    border: "none",
    borderRadius: 14,
    background: "#2563eb",
    color: "#fff",
    cursor: "pointer",
    fontWeight: "600",
    fontSize: 15
  },

  submitBtn: {
    flex: 1,
    padding: 14,
    border: "none",
    borderRadius: 14,
    background: "#10b981",
    color: "#fff",
    cursor: "pointer",
    fontWeight: "600",
    fontSize: 15
  },

  progressWrap: {
    height: 8,
    background: "#e2e8f0",
    borderRadius: 20,
    margin: "20px 0",
    overflow: "hidden"
  },

  progressIn: {
    height: "100%",
    background:
      "linear-gradient(90deg,#3b82f6,#60a5fa)",
    borderRadius: 20,
    transition: "0.3s"
  },

  /* ================= DROPDOWN ================= */

  dropdown: {
    position: "relative",
    marginTop: 8,
    marginBottom: 10
  },

  dropdownBox: {
    padding: "12px 15px",
    borderRadius: 12,
    border: "1px solid #ddd",
    background: "#fff",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    cursor: "pointer"
  },

  arrow: {
    transition: "0.3s",
    fontSize: 18
  },

  dropdownMenu: {
    position: "absolute",
    top: "110%",
    left: 0,
    right: 0,
    background: "#fff",
    borderRadius: 12,
    boxShadow: "0 10px 20px rgba(0,0,0,0.08)",
    overflow: "hidden",
    zIndex: 999
  },

  dropdownItem: {
    padding: "12px 15px",
    cursor: "pointer",
    borderBottom: "1px solid #f1f5f9"
  },

  /* ================= LOGIN ================= */

  loginContainer: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    backgroundImage:
      "linear-gradient(rgba(255,255,255,0.75), rgba(255,255,255,0.75)), url('/Room.png')",

    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat"
  },

  loginCard: {
    width: "100%",
    maxWidth: 380,
    background: "#fff",
    padding: 35,
    borderRadius: 30,
    textAlign: "center",
    boxShadow: "0 10px 35px rgba(0,0,0,0.08)"
  },

  loginInput: {
    width: "100%",
    padding: 14,
    borderRadius: 12,
    border: "1px solid #dbeafe",
    marginBottom: 15,
    outline: "none",
    boxSizing: "border-box"
  },

  loginBtn: {
    width: "100%",
    padding: 14,
    border: "none",
    borderRadius: 14,
    background: "#2563eb",
    color: "#fff",
    fontWeight: "600",
    cursor: "pointer",
    fontSize: 15
  },

  formBtn: {
    width: "100%",
    padding: 14,
    border: "none",
    borderRadius: 14,
    background: "#e0f2fe",
    color: "#0369a1",
    fontWeight: "600",
    cursor: "pointer",
    marginTop: 12,
    fontSize: 15
  },

  /* ================= REPORT ================= */

  reportCard: {
    background: "#ffffff",
    padding: 18,
    borderRadius: 18,
    marginBottom: 15,
    border: "1px solid #e2e8f0",
    boxShadow: "0 4px 12px rgba(0,0,0,0.04)"
  },

  detailPanel: {
    background: "#ffffff",
    padding: 25,
    borderRadius: 22,
    marginTop: 20,
    border: "1px solid #e2e8f0",
    boxShadow: "0 4px 20px rgba(0,0,0,0.05)"
  },

  viewBtn: {
    padding: "7px 10px",
    background: "#22c55e",
    color: "#fff",
    border: "none",
    borderRadius: 8,
    marginRight: 5,
    cursor: "pointer"
  },

  /* ================= ADMIN ================= */

  sidebar: {
    width: 240,
    background: "#ffffff",
    padding: 25,
    borderRight: "1px solid #e2e8f0",
    minHeight: "100vh"
  },

  sidebarLogo: {
    textAlign: "center",
    marginBottom: 30,
    fontWeight: "bold"
  },

  menuItem: {
    padding: 14,
    borderRadius: 14,
    marginBottom: 10,
    cursor: "pointer",
    color: "#334155",
    transition: "0.2s"
  },

  menuActive: {
    padding: 14,
    borderRadius: 14,
    marginBottom: 10,
    cursor: "pointer",
    background:
      "linear-gradient(90deg,#3b82f6,#60a5fa)",
    color: "#fff",
    fontWeight: "600",
    boxShadow: "0 4px 12px rgba(59,130,246,0.3)"
  },

  pageBox: {
    background: "#ffffff",
    padding: 25,
    borderRadius: 25,
    boxShadow: "0 4px 20px rgba(0,0,0,0.05)"
  },

  statsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(4,1fr)",
    gap: 20,
    marginBottom: 25
  },

  statsCard: {
    background: "#eff6ff",
    padding: 20,
    borderRadius: 15,
    textAlign: "center"
  },

  userCard: {
    padding: 15,
    background: "#f8fafc",
    borderRadius: 12,
    marginBottom: 10
  },

  dashboardWrap: {
    padding: 20
  },

  dashboardHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20
  },

  cardTop: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },

  fancyCardBlue: {
    background: "linear-gradient(135deg,#7dd3fc,#dbeafe)",
    padding: 25,
    borderRadius: 25,
    boxShadow: "0 5px 15px rgba(0,0,0,0.1)"
  },

  fancyCardGreen: {
    background: "linear-gradient(135deg,#34d399,#d1fae5)",
    padding: 25,
    borderRadius: 25,
    boxShadow: "0 5px 15px rgba(0,0,0,0.1)"
  },

  fancyCardRed: {
    background: "linear-gradient(135deg,#fb7185,#fee2e2)",
    padding: 25,
    borderRadius: 25,
    boxShadow: "0 5px 15px rgba(0,0,0,0.1)"
  },

  fancyCardDark: {
    background: "linear-gradient(135deg,#0f766e,#134e4a)",
    color: "#fff",
    padding: 25,
    borderRadius: 25,
    boxShadow: "0 5px 15px rgba(0,0,0,0.1)"
  },

  detailGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1.3fr",
    gap: 20
  },

  graphCard: {
    background: "#fff",
    borderRadius: 25,
    padding: 25,
    boxShadow: "0 5px 15px rgba(0,0,0,0.08)"
  },

  roomCard: {
    background: "#fff",
    borderRadius: 25,
    padding: 25,
    boxShadow: "0 5px 15px rgba(0,0,0,0.08)"
  },

  fakeGraph: {
    height: 120,
    background: "#eff6ff",
    borderRadius: 20,
    position: "relative",
    overflow: "hidden",
    marginTop: 20
  },

  graphLine: {
    position: "absolute",
    width: "80%",
    height: 6,
    background: "#0284c7",
    top: 50,
    left: 30,
    borderRadius: 20
  },

  answerBox: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 18,
    borderRadius: 15,
    marginTop: 15,
    fontWeight: "500"
  },

  logoutBtn: {
    padding: "10px 16px",
    border: "none",
    borderRadius: 10,
    background: "#ef4444",
    color: "#fff",
    cursor: "pointer"
  },

  adminHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20
  }

};