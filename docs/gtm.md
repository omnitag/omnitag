# GTM

## 如何產生新TAG
### 點選圖片 "Add a new tag"
<img src="resources/addNewTag.png">

### 產生新Tag畫面
<img src="resources/newTagForm.png">

### 產生自訂HTML Tag
1. 修改Tag的名字
2. 點選 choose a tag
3. 從展開選單點選"custom html"
<img src="resources/addCustomHtml.png">

### 填入自訂HTML
#### 1. 填入以下 OmniTag 語法, 並置換 ```[Your-ID]```
```
<script>
(function(w, d, s) {
  var f = d.getElementsByTagName(s)[0],
      j = d.createElement(s);
  j.async = true;
  j.src = 'https://usergram.omniscientai.com/tag.js?id=[Your-ID]';
  f.parentNode.insertBefore(j, f);
})(window, document, 'script')
</script>
```

<img src="resources/fillCustomHtml.png">

#### 2. 點選 "Chooose a trigger"
<img src="resources/chooseATrigger.png">

#### 3. 選擇 'All Page'
<img src="resources/chooseATriggerAllPage.png">

#### 4. 確認無誤後按儲存(Save)
<img src="resources/addNewTagSave.png">
