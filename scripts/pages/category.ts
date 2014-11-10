$("./body") {
  add_class("mw_category")

  $(".//div[@id='Wrapper']") {
    remove("//*[contains(@class,'TopSellers')]")
    remove("//*[contains(@class,'NewProducts')]")
    remove("//*[contains(@class, 'PopularProducts')]")
    remove("//*[contains(@id, 'CategoryBreadcrumb')]")
  }
   
  $("./div[@id='Container']/div[@id='Outer']") {
    $("./div[@id='Wrapper']") {
      remove("//*[contains(@class,'CompareButton')]")
 
      $("./div[@class='Left']") {
        # Create Togglers
        $("./div[@id='SideShopByBrand' or @id='SideCategoryShopByPrice']") {
          attribute("data-ur-set", "toggler")
          $("./h2") {
            attribute("data-ur-toggler-component", "button")
            insert("div", class: "mw_indicator")
          }
          $("./div") {
            attribute("data-ur-toggler-component", "content")
            $(".//li/a") {
              insert("div", class: "mw_arrow")
            }
          }
        }
   
        $(".//div[contains(@class, 'NewsletterSubscription')]") {
          remove()
        }
      }

      $("//*[contains(@class,'ProductList')]//li") {
        insert_bottom("div", class: "mw_product_info")
      }

      $("//*[contains(@class,'mw_product_info')]") {
        move_here("../div[@class='ProductDetails']")
        move_here("../div[@class='ProductPriceRating']")
        move_here("../div[@class='ProductActionAdd']")
      }
   
      $("./div[@class='Content ']") {
        $("./div[@id='CategoryHeading']") {
          $("./div[@class='BlockContent']") {
            # Move page title on top of the content area
            $("./h2") {
              move_to("../../../../div[@class='Left']", "top")
            }
            $("./div[@class='FloatRight SortBox']") {
              $("./form") {
                wrap_text_children("span")
              }
            }
          }
        }
      }
    }
  }
}