$("./body") {
	$(".//div[@id='Footer']") {
		remove("//p")
		insert("footer", "All prices are in USD", class: "mw-footer footer-price")
		insert("footer", "Copyright 2014 iGadgetCommerce.", class: "mw-footer footer-copyright")
		insert("footer", "Powered by Moovweb", class: "mw-footer footer-powerby")
	}
}
