<header>
  <h2>Random Coffee</h2>
</header>

<style lang="less">
  @import "../styles/variables.less";
  @import "../styles/mixins.less";

  header {
    background-color: @colorSecondaryLighter;
    border-bottom-left-radius: @commonPadding;
    border-bottom-right-radius: @commonPadding;
    display: block;
    margin: 0 auto 2rem;
    padding: @commonPadding;
    text-align: center;
    width: 300px;
    .shadow();
  }

  h2 {
    margin: 0;
  }

  @media only screen and (max-width: @thresholdMobile) {
    header {
      border-radius: 0;
      width: 100%;
      width: auto;
    }
  }
</style>
