$('./body') {
  add_class("mw_home")

  	$(".//div[@id='Wrapper']") {
		remove("//*[contains(@class,'Right')]")
  	}
}
