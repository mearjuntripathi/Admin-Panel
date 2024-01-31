function initializeEventListeners() {
    const body = document.querySelector('body');
    const modeToggle = body.querySelector('.mode-toggle');
    const sidebarToggle = body.querySelector('.sidebar-toggle');
    const sidebar = body.querySelector('nav');

    let getMode = localStorage.getItem("mode");
    if (getMode && getMode === "dark") {
        body.classList.toggle('dark');
    }

    let getStatus = localStorage.getItem('status');
    if (getStatus && getStatus === "close") {
        sidebar.classList.toggle("close");
    }

    modeToggle.addEventListener('click', () => {
        body.classList.toggle('dark');
        if (body.classList.contains('dark')) {
            localStorage.setItem("mode", "dark");
        } else {
            localStorage.setItem("mode", "light");
        }
    });

    sidebarToggle.addEventListener('click', () => {
        sidebar.classList.toggle("close");
        if (sidebar.classList.contains('close')) {
            localStorage.setItem("status", "close");
        } else {
            localStorage.setItem("status", "open");
        }
    });
}


var panel = document.getElementById('panel');

function showDashboard() {
    var html = `<link rel="stylesheet" href="./css/deshboard.css">
    <div class="top">
        <i class="uil uil-bars sidebar-toggle" ></i>

        <div class="search-box">
            <i class="uil uil-search"></i>
            <input type="text" placeholder="Search here . . .">
        </div>
        <img src="./images/profile.jpg" alt="">
    </div>
    <div class="dash-content">
        <div class="overview">
            <div class="title">
                <i class="uil uil-tachometer-fast-alt"></i>
                <span class="text">Dashboard</span>
            </div>
            <div class="boxes">
                <div class="box box1">
                    <i class="uil uil-eye"></i>
                    <span class="text">Total Views</span>
                    <span class="number">50,120</span>
                </div>
                <div class="box box2">
                    <i class="uil uil-user"></i>
                    <span class="text">Total Clients</span>
                    <span class="number">11,216</span>
                </div>
                <div class="box box3">
                    <i class="uil uil-building"></i>
                    <span class="text">Total Properties</span>
                    <span class="number">5,110</span>
                </div>
            </div>
        </div>
        <div class="activity">
            <div class="title">
                <i class="uil uil-clock-two"></i>
                <span class="text">Recent Enquiry</span>
            </div>

            <div class="activity-data">
                <div class="data names">
                    <span class="data-title">Name</span>
                    <span class="data-list">Arjun Tripathi</span>
                    <span class="data-list">Rahul Durgapal</span>
                    <span class="data-list">Sagar Chuhan</span>
                    <span class="data-list">Niket Narayan</span>
                </div>

                <div class="data emails">
                    <span class="data-title">Email</span>
                    <span class="data-list">mearjuntripathi@gmail.com</span>
                    <span class="data-list">rahuldurgapal@gmail.com</span>
                    <span class="data-list">sagarvns@gmail.com</span>
                    <span class="data-list">narayanniket@gmail.com</span>
                </div>

                <div class="data joined">
                    <span class="data-title">Date</span>
                    <span class="data-list">NEW</span>
                    <span class="data-list">NEW</span>
                    <span class="data-list">NEW</span>
                    <span class="data-list">NEW</span>
                </div>

                <div class="data status">
                    <span class="data-title">Status</span>
                    <span class="data-list">View</span>
                    <span class="data-list">View</span>
                    <span class="data-list">View</span>
                    <span class="data-list">View</span>
                </div>
            </div>
        </div>
    </div>`

    panel.classList.remove('clients');
    panel.classList.remove('notification');
    panel.classList.remove('enqires');
    panel.classList.add('dashboard');
    panel.innerHTML = html;
    initializeEventListeners();
}

function showClients() {
    var html = `<link rel="stylesheet" href="./css/clients.css">
    <div class="top">
        <i class="uil uil-bars sidebar-toggle" ></i>

        <div class="search-box">
            <i class="uil uil-search"></i>
            <input type="text" placeholder="Search here . . .">
        </div>
        <img src="./images/profile.jpg" alt="">
    </div>
    <div class="clients-content">
        <div class="overview">
            <div class="title">
                <i class="uil uil-tachometer-fast-alt"></i>
                <span class="text">Dashboard</span>
            </div>
            <div class="boxes">
                <div class="box box1">
                    <i class="uil uil-eye"></i>
                    <span class="text">Total Views</span>
                    <span class="number">50,120</span>
                </div>
                <div class="box box2">
                    <i class="uil uil-user"></i>
                    <span class="text">Total Clients</span>
                    <span class="number">11,216</span>
                </div>
                <div class="box box3">
                    <i class="uil uil-building"></i>
                    <span class="text">Total Properties</span>
                    <span class="number">5,110</span>
                </div>
            </div>
        </div>
        <div class="activity">
            <div class="search-tools">
                <div class="title">
                    <i class="uil uil-users-alt"></i>
                    <span class="text">All Avilable Clients</span>
                </div>
                <div class="search">
                    <div class="input">
                        <input type="text" placeholder="Search Clients . . .">
                        <button><i class="uil uil-search"></i></button>
                    </div>
                    <div>
                        Short BY: <select name="Catagory" id="">
                            <option value="">Newest</option>
                            <option value="">Older</option>
                            <option value="">Alphabet</option>
                            <option value="">Active</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="activity-data">
                <div class="data names">
                    <span class="data-title">Clients Name</span>
                    <span class="data-list"> <img src="./images/profile.jpg" alt=""> Arjun Tripathi</span>
                    <span class="data-list"> <img src="./images/profile.jpg" alt=""> Rahul Durgapal</span>
                    <span class="data-list"> <img src="./images/profile.jpg" alt=""> Sagar Chuhan</span>
                    <span class="data-list"> <img src="./images/profile.jpg" alt=""> Niket Narayan</span>
                </div>

                <div class="data emails">
                    <span class="data-title">Email</span>
                    <span class="data-list">mearjuntripathi@gmail.com</span>
                    <span class="data-list">rahuldurgapal@gmail.com</span>
                    <span class="data-list">sagarvns@gmail.com</span>
                    <span class="data-list">narayanniket@gmail.com</span>
                </div>

                <div class="data joined">
                    <span class="data-title">Catagory</span>
                    <span class="data-list">Buyer</span>
                    <span class="data-list">Buyer</span>
                    <span class="data-list">Buyer</span>
                    <span class="data-list">Buyer</span>
                </div>

                <div class="data joined">
                    <span class="data-title">Join-Date</span>
                    <span class="data-list">12-dec-2023</span>
                    <span class="data-list">11-dec-2023</span>
                    <span class="data-list">10-dec-2023</span>
                    <span class="data-list">09-dec-2023</span>
                </div>

                <div class="data status">
                    <span class="data-title">Status</span>
                    <span class="data-list">View</span>
                    <span class="data-list">View</span>
                    <span class="data-list">View</span>
                    <span class="data-list">View</span>
                </div>
            </div>
        </div>`
    panel.classList.remove('dashboard');
    panel.classList.remove('notification');
    panel.classList.remove('enqires');
    panel.classList.add('clients');
    panel.innerHTML = html;
    initializeEventListeners();
}

function showNotifications() {
    var html = `<link rel="stylesheet" href="./css/notification.css">
    <div class="top">
        <i class="uil uil-bars sidebar-toggle" ></i>

        <div class="search-box">
            <i class="uil uil-search"></i>
            <input type="text" placeholder="Search here . . .">
        </div>
        <img src="./images/profile.jpg" alt="">
    </div>
    <div class="notification-content">
        <div class="overview">
            <div class="title">
                <i class="uil uil-bell"></i>
                <span class="text">Notifications</span>
            </div>
        </div>
        <div class="activity">
            <div class="search-tools">
                <div class="title">
                    <i class="uil uil-calender"></i>
                    <span class="text">Today</span>
                </div>
                <div class="search">
                    <div style="color: var(--text-color);">
                        Today: <input type="date" id="myDateInput"
                            onmouseover="document.getElementById('myDateInput').value = new Date().toISOString().split('T')[0]">
                    </div>
                </div>
            </div>
            <div class="notification-data">
                <div class="notify">
                    <div class="info">
                        <img src="./images/profile.jpg" alt="">
                        <p class="name">Arjun Tripathi</p>
                        <p class="message">Make a Inquiry</p>
                    </div>
                    <p class="time">08:30 AM</p>
                </div>
                <div class="notify">
                    <div class="info">
                        <img src="./images/profile.jpg" alt="">
                        <p class="name">Arjun Tripathi</p>
                        <p class="message">Want a meetings</p>
                    </div>
                    <p class="time">08:30 AM</p>
                </div>
            </div>
        </div>`
    panel.classList.remove('dashboard');
    panel.classList.remove('clients');
    panel.classList.remove('enqires');
    panel.classList.add('notification');
    panel.innerHTML = html;
    initializeEventListeners();
}

function showInquiry() {
    var html = `<link rel="stylesheet" href="./css/inquiry.css">
    <div class="top">
        <i class="uil uil-bars sidebar-toggle" ></i>

        <div class="search-box">
            <i class="uil uil-questions"></i>
            <input type="text" placeholder="Search here . . .">
        </div>
        <img src="./images/profile.jpg" alt="">
    </div>
    <div class="inquiry-content">
        <div class="overview">
            <div class="title">
                <i class="uil uil-question"></i>
                <span class="text">Enquiries</span>
            </div>
        </div>
        <div class="activity">
            <div class="search-tools">
                <div class="title">
                    <i class="uil uil-calender"></i>
                    <span class="text">All Days</span>
                </div>
                <div class="search">
                    <div style="color: var(--text-color);">
                        Today: <input type="date" id="myDateInput"
                            onmouseover="document.getElementById('myDateInput').value = new Date().toISOString().split('T')[0]">
                    </div>
                </div>
            </div>
            <div class="activity-data">
                <div class="data names">
                    <span class="data-title">Name</span>
                    <span class="data-list">Arjun Tripathi</span>
                    <span class="data-list">Rahul Durgapal</span>
                    <span class="data-list">Sagar Chuhan</span>
                    <span class="data-list">Niket Narayan</span>
                </div>

                <div class="data emails">
                    <span class="data-title">Email</span>
                    <span class="data-list">mearjuntripathi@gmail.com</span>
                    <span class="data-list">rahuldurgapal@gmail.com</span>
                    <span class="data-list">sagarvns@gmail.com</span>
                    <span class="data-list">narayanniket@gmail.com</span>
                </div>

                <div class="data joined">
                    <span class="data-title">Date</span>
                    <span class="data-list">NEW</span>
                    <span class="data-list">NEW</span>
                    <span class="data-list">NEW</span>
                    <span class="data-list">NEW</span>
                </div>

                <div class="data Status">
                    <span class="data-title">Status</span>
                    <span class="data-list">View</span>
                    <span class="data-list">View</span>
                    <span class="data-list">View</span>
                    <span class="data-list">View</span>
                </div>
            </div>  
        </div>`
    panel.classList.remove('dashboard');
    panel.classList.remove('clients');
    panel.classList.remove('notification');
    panel.classList.add('inquiry');
    panel.innerHTML = html;
    initializeEventListeners();
}