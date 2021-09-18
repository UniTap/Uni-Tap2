import React from 'react'
import $ from 'jquery'
import "./LoginPage.css"
import loginImg from '../../asserts/loginImg.svg'
import loginLogo from '../../asserts/loginLogo.svg'
function LoginPage() {

  $(document).ready(function () {
    $("#do_login").click(function () {
      closeLoginInfo();
      $(this).parent().find('span').css("display", "none");
      $(this).parent().find('span').removeclassName("i-save");
      $(this).parent().find('span').removeclassName("i-warning");
      $(this).parent().find('span').removeclassName("i-close");

      var proceed = true;
      $("#login_form input").each(function () {

        if (!$.trim($(this).val())) {
          $(this).parent().find('span').addclassName("i-warning");
          $(this).parent().find('span').css("display", "block");
          proceed = false;
        }

      });

      if (proceed) { //everything looks good! proceed...

        $(this).parent().find('span').addclassName("i-save");
        $(this).parent().find('span').css("display", "block");

      }
    });

    //reset previously results and hide all message on .keyup()
    $("#login_form input").keyup(function () {
      $(this).parent().find('span').css("display", "none");
    });

    openLoginInfo();
    setTimeout(closeLoginInfo, 1000);
  });

  function openLoginInfo() {
    $(document).ready(function () {
      $('.b-form').css("opacity", "0.01");
      $('.box-form').css("left", "-37%");
      $('.box-info').css("right", "-37%");
    });
  }

  function closeLoginInfo() {
    $(document).ready(function () {
      $('.b-form').css("opacity", "1");
      $('.box-form').css("left", "0px");
      $('.box-info').css("right", "-5px");
    });
  }

  $(window).on('resize', function () {
    closeLoginInfo();
  });

  return (
    <div className="LoginPage">

      <div className='box'>

        <div className='box-form'>

          <div className='box-login-tab'></div>

          <div className='box-login-title'>
            <div className='i i-login'></div><h2>LOGIN</h2>
          </div>

          <div className='box-login'>

            <div className='fieldset-body' id='login_form'>

              <button onClick={openLoginInfo} className='b b-form i i-more' title='More Info'></button>
              
              <p className='field'>              
                <label htmlFor='user'>Email</label>
                <input type='text' id='user' name='user' title='Username' placeholder='Enter your Email' />
                <span id='valida' className='i i-warning'></span>
              </p>

              <p className='field'>
                <label htmlFor='pass'>Password</label>
                <input type='password' id='pass' name='pass' title='Password' placeholder='Enter your Password' />
                <span id='valida' className='i i-close'></span>
              </p>

              <label className='checkbox'><input type='checkbox' value='TRUE' title='Keep me Signed in' /> Keep me Signed in</label>

              <input type='submit' id='do_login' value='LOGIN' title='LOGIN' />

            </div>

          </div>

        </div>

        <div className='box-info'>
          <p>
            <button onClick={closeLoginInfo} className='b b-info i i-left' title='Back to Sign In'></button>
            Need Help?
          </p>

          <div className='line-wh'></div>

          <button className='b-support' title='Forgot Password?'> Forgot Password?</button>
          <button className='b-support' title='Contact Support'> Contact Support</button>
          <div className='line-wh'></div>
          <button className='b-cta' title='Sign up now!'> CREATE ACCOUNT</button>

        </div>

      </div>

      <div className="Imgdiv">
        <img className="LoginImg" src={loginImg} alt="" />
      </div>

    </div>
  )
}

export default LoginPage