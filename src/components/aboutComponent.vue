<template>
  <div id="aboutComponent">
    <div class="container-fluid">
      <b-row id="title-section">
        <div class="title">
          <span>The Daily Prophet</span>
        </div>
        <div class="sub-title">
          <span>*The Wizard world's beguiling broadsheet of choice*</span>
        </div>
      </b-row>
      <b-row id="content">
        <div class="col-sm-4 partition mx-auto">
          <div class="article">
            <div class="heading">About BVM</div>
            <div class="content">
              We Birla Vishvakarma Mahavidyalaya(BVM) family take the pride of being the first engineering college in
              the state of Gujarat, founded in 1948 and inaugurated by last Viceroy of India "Lord Mountbatten".
            </div>
          </div>
          <div class="article">
            <div class="heading">About Udaan</div>
            <div class="content">
              UDAAN is not just an annual function but a celebration of what the students here are and about their
              aspirations and dreams. As the name defines it is a joint effort by each one to help provide the flight
              and wings to the bright ideas of young minds.
            </div>
          </div>
        </div>
        <div class="col-sm-4 partition mx-auto">
          <div class="center-headline">
            The Euphoric Leap is coming
          </div>
          <img src="../assets/udaan.gif" alt="gif" class="img-fluid center-gif">
        </div>
        <div class="col-sm-4 partition">
          <div class="article">
            <div class="heading">Contact Us</div>
            <div class="content imgs">
              <div class="leaders">
                <div class="contact">
                  <div class="name">Raj Ambani</div>
                  <div class="position">(GS)</div>
                  <div class="phone">9106039994</div>
                </div>
                <div class="contact">
                  <div class="name">Harshang Patel</div>
                  <div class="position">(Joint GS)</div>
                  <div class="phone">9429958709</div>
                </div>
                <div class="contact">
                  <div class="name">Kalyani Bhatt</div>
                  <div class="position">(LR)</div>
                  <div class="phone">8141764147</div>
                </div>
              </div>
              <div class="tech-heads">
                <div class="contact">
                  <div class="name">Darshil Gondaliya</div>
                  <div class="position">(Tech Head)</div>
                  <div class="phone">9913235338</div>
                </div>
                <div class="contact">
                  <div class="name">Arth Shah</div>
                  <div class="position">(Tech Head)</div>
                  <div class="phone">8347600770</div>
                </div>
                <div class="contact">
                  <div class="name">Parthesh Mehta</div>
                  <div class="position">(Tech Head)</div>
                  <div class="phone">9408014007</div>
                </div>
                <div class="contact">
                  <div class="name">Zaran Patel</div>
                  <div class="position">(Tech Head)</div>
                  <div class="phone">8141867267</div>
                </div>

              </div>
            </div>
          </div>
        </div>
        <div id="footer">
          <div class="footer-headline"><a href="https://drive.google.com/file/d/1s0jqw3zfl3W65QMBIhi3mm7fW7d8Q6LK/view?usp=drivesdk">Download the schedule</a></div>
          <div class="sub-title">Follow us on</div>
          <div class="social-handles">
            <a href="https://www.youtube.com/channel/UCnqRgS6O0MGF8sTYb_fHjWA">
              <img src="../assets/youtube.png" alt="social" class="img-fluid social-icon">
            </a>
            <a href="https://www.instagram.com/teamudaan/">
              <img src="../assets/instagram.png" alt="social" class="img-fluid social-icon">
            </a>
            <a href="https://www.facebook.com/teamudaan19/">
              <img src="../assets/facebook.png" alt="social" class="img-fluid social-icon">
            </a>
          </div>
        </div>
      </b-row>
    </div>
  </div>
</template>

<script>
  export default {
    name: "aboutComponent"
  }
</script>

<style scoped lang="sass">
  @import ../sass/aboutComponent

</style>