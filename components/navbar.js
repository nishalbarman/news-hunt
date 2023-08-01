function navbar() {
  return `
  
  <div id="navbar" class="navbar">
      <div class="news-logo">
          <img src="https://images.news18.com/assam/uploads/2020/11/desktop-assam-navlogo.png" alt="website-logo" />
      </div>
      <div class="second-half">
          <div class="search-box">
              <div class="search-box-outer">
                  <input type="text" placeholder="Search" id="search" class="search" autocomplete="off">
                  <i class="fa-solid fa-magnifying-glass" style="color: rgb(0, 0, 0, 0.6);"></i>
              </div>
              <div class="follow-icons">
                  <a href="https://facebook.com/" target="_blank"><img
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png"
                          class="social-icon" /></a>
                  <a href="https://twitter.com" target="_blank"><img
                          src="https://w7.pngwing.com/pngs/421/879/png-transparent-twitter-logo-social-media-iphone-organization-logo-twitter-computer-network-leaf-media.png"
                          class="social-icon" /></a>
              </div>
          </div>
          <div class="links" id="link">
              <a href="#">অসম</a>
              <a href="#">দেশ</a>
              <a href="#">অপৰাধনামা</a>
              <a href="#">মনোৰঞ্জন</a>
              <a href="#">ব্যৱসায়</a>
              <a href="#">ক্ৰীড়া</a>
              <a href="#">জীৱনশৈলী</a>
              <a href="#">প্ৰযুক্তি</a>
          </div>
      </div>
  </div>`;
}

export default navbar;
