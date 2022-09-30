const Navbar=()=>{
    return `<a href="#">
    <div id="left_box_nav">
      <div id="logo_box_nav">
        <img
          class="rev_logo_nav"
          src="https://www.revv.co.in/grapheneImages/newopen/logo.svg"
          alt="revv"
        />

        <div class="sanitised_nav">Sanitised. Safe</div>
      </div>
    </div>
  </a>
  <div< id="right_box_nav">
    <a href="#">
      <div class="hyundai_box_nav">
        <img
          id="test"
          src="https://www.revv.co.in/imgs/hyundai_logo_hover.svg"
          alt="Hynddai Subcription"
        /></div
    ></a>
    <a href="#">
      <div class="mahindra_box_nav">
        <img
          src="https://www.revv.co.in/imgs/mahindra_logo_hover.svg"
          alt="Mahindra Subcription"
        /></div
    ></a>
    <a href="#">FAQs</a>
    <a href="#">
      <div id="sign_div_nav">
        <img
          class="sign_lg_nav"
          src="https://www.revv.co.in/grapheneImages/newopen/ic-web-profile-login.svg"
          alt=">"/>Login or Signup
      </div>
    </a> `
}

export{Navbar}


// Hi i am Tarak i have exported my navbar so you have to just import and create a div in your page and id="Navbar" and then append