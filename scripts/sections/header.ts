$('./body') {

	$(".//div[@id='Wrapper']") {
		$(".//div[@class='Content']") {
			remove("//*[contains(@class,'FeedLink')]")
		}
  	}

	$(".//div[@id='Header']") {

		attribute("data-ur-set", "toggler")

		remove("//*[contains(@class, 'BrandList')]")
		remove("//*[contains(@class, 'NewsletterSubscription')]")
		remove("//*[contains(@class, 'Clear')]")

	  	$("./div[@id='Logo']") {

		  # Move top menu into #Logo container
		  move_here("../../../div[@id='TopMenu']", "bottom") {
		    # Remove unwanted top menu items from upper menu
		    remove(".//li[not(contains(@class, 'CartLink') or contains(@class, 'First'))]")
		  }

		  # Insert HTML for bottom of header
			insert("div", class: "mw_header_bottom") {
			  insert("div", class: "mw_search")
			  insert("div", class: "mw_menu_btn sprites-menu", data-ur-toggler-component: "button")
			}

			$("//div[@id='TopMenu']/ul//li[@class='First']") {
			  wrap("div", class: "First position-right sprites-user")
			  attribute("style", "opacity:0;")
			}

			$("//div[@id='TopMenu']/ul//li[@class='CartLink']") {
			  wrap("div", class: "CartLink position-right sprites-cart")
			  attribute("style", "opacity:0;")
			}

			$("//div[@id='SearchForm']/form//input[@type='image']") {
			  wrap("div", class: "mw_search_btn sprites-search")
			  attribute("style", "opacity:0;")
			}

			# Fill search HTML
			$("..//div[@class='mw_search']") {
			  # Move search form into container element
			  move_here("//div[@id='SearchForm']", "bottom") {
			    remove("./p")
			 
			    $("./form") {
			      remove("./label")
			      # Change search button background image
			      $("./input[@type='image']") {
			        wrap("div", class: "mw_search_btn sprites-search")
			      }
			      $("./input[@type='text']") {
			        attribute("placeholder", "Search...")
			      }
			    }
			  }
			}

		}

		# Move menu items into header
		move_here("../div[@id='Menu']", "bottom") {
		  attribute("data-ur-toggler-component", "content")
		  # Move "Category List" element on bottom of #Menu element
		  move_here("../../div[@id='Wrapper']/div[@class='Left']/div[@id='SideCategoryList']", "bottom")
		  $$("li") {
		    add_class("mw_bar2")
		  }
		}
	}
}



