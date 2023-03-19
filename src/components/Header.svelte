<header>
  <h2>Random Coffee</h2>
</header>

<style lang="less">
  @import "../styles/common.less";
  header {
    display: block;
    width: 300px;
    text-align: center;
    margin: 0 auto 2rem;
    background-color: @cardColor;
    padding: @cardInfoPadding;
    border-bottom-left-radius: @cardInfoPadding;
    border-bottom-right-radius: @cardInfoPadding;
    .shadow();

  }
  h2 {
    margin: 0;
  }


  @media only screen and (max-width: @thresholdMobile) {
    header {
      width: auto;
      border-radius: 0;
      width: 100%;
    }
  }
</style>
