$('./body') {

  	add_class("mw_product")

  	 $(".//div[@id='Wrapper']") {
	    remove("//*[contains(@class,'TopSellers')]")
	    remove("//*[contains(@class,'NewProducts')]")
	    remove("//*[contains(@class, 'PopularProducts')]")
	    remove("//*[contains(@class, 'AddToWishlist')]")
	    remove("//*[contains(@class, 'SideRelatedProducts')]")
	    remove("//*[contains(@class, 'SideRecentlyViewed')]")
	    remove("//*[contains(@class, 'productAttributeList')]")
	    remove("//*[contains(@id, 'ProductBreadcrumb')]")
	    remove("//*[contains(@id, 'ImageScrollNext')]")	    
	    remove("//*[contains(@id, 'ImageScrollPrev')]")
	  }

	  $("//*[contains(@class,'ProductList')]//li") {
        insert_bottom("div", class: "mw_product_info")
      }
}
