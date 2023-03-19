<script lang="ts">
  export let note: string;
  let noteLowerCase = note.toLocaleLowerCase();
  let letterWeights:number[] = [];
  for (let i = 0; i < 2; i++) {
    const code = noteLowerCase.charCodeAt(i) - 97;
    // check if it is a letter
    if (code >= 0 && code <= 25) {
      letterWeights.push(code);
    } else {
      letterWeights.push(12.5);
    }
  }

  const bgColor = Math.floor((letterWeights[1] / 25) * 360 + (letterWeights[0] / 25) * 360/25);
</script>

<div
  class="note"
  style="background-color:hsl({bgColor} 35% 80% / 1);border-color:hsl({bgColor} 35% 65% / 1);"
  >{note}</div
>

<style lang="less">
  @import '../styles/common.less';

  .note {
    height: 1.5em;
    text-align: center;
    padding: 0 10px;
    margin-left: 10px;
    border-radius: 0.75em;
    margin-bottom: @cardInfoPadding;
    border: 1px solid;
    line-height: 1.3em;
    white-space: nowrap;
    min-width: 100px;
  }
  .note:first-child {
    margin-left: 0;
  }
</style>
