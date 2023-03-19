<script lang="ts">
  export let note: string;
  let noteLowerCase = note.toLocaleLowerCase();
  let codes: number[] = [];

  for (let i = 0; i < 2; i++) {
    const code = noteLowerCase.charCodeAt(i) - 97;
    // check if it is a letter
    if (code >= 0 && code <= 25) {
      codes.push(code);
    } else {
      codes.push(12.5);
    }
  }

  const bgColor = Math.floor(
    (codes[1] / 25) * 360 + ((codes[0] / 25) * 360) / 25
  );
</script>

<div
  class="note"
  style="background-color:hsl({bgColor} 35% 80% / 1); border-color:hsl({bgColor} 35% 65% / 1);"
>
  {note}
</div>

<style lang="less">
  @import "../styles/variables.less";

  .note {
    border-radius: 0.75em;
    border: 1px solid;
    height: 1.5em;
    line-height: 1.3em;
    margin-bottom: @commonPadding;
    margin-left: 0.75em;
    min-width: 100px;
    padding: 0 1em;
    text-align: center;
    white-space: nowrap;
  }

  .note:first-child {
    margin-left: 0;
  }
</style>
