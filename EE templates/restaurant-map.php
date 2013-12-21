{embed="base/_head"}

<body class="meals">

{embed="base/_header"}

<div id="wrapper">
<h4>Restaurant Map</h4>
<div class="map-container">
  <div id="panel" class="storelocator-panel">
      <div class="location-search">
	<input id="gmap_where" type="text" name="gmap_where" />
	<div id="button" class="button dotted" onclick="findAddress(); return false;">Search for address</div>
      </div>
  </div>
  <div id="map-canvas"></div>
</div> 
<button id="closebutton" class="icon-close"></button>

</div>

{embed="base/_footer"}