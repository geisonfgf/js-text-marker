function ArgumentException(message) {
   this.message = message;
   this.name = "ArgumentException";
}

function Tag(tag, background_color, text_color){
  this.valid_tags = ["h1", "h2", "h3", "h4", "h5", "h6", "span", "div", "p", "a", "button", "center", "strong", "u", "b", "i"];
  this.valid_css_colors = ["aqua", "black", "blue", "fuchsia", "gray", "green", "lime", "maroon", "navy", "olive", "orange", "purple", "red", "silver", "teal", "white", "yellow"];

  this.tag = (function(tag, valid_tags){
    var tag = tag || "span";
    var exception_error_message = "tag must be one of these html tags h1, h2, h3, h4, h5, h6, span, div, p, a, button, center, strong, u, b, i";
    var is_html_tag_valid = true;
    if(valid_tags.indexOf(tag) == -1) is_html_tag_valid = false;
    if(is_html_tag_valid){
      return tag;
    }else{
      throw new ArgumentException(exception_error_message);
    }
  })(tag, this.valid_tags);

  this.background_color = (function(background_color, valid_css_colors){
    var background_color = background_color || "yellow";
    var exception_error_message = "The color must be a css color value like #ffffff or one of these standard colors aqua, black, blue, fuchsia, gray, green, lime, maroon, navy, olive, orange, purple, red, silver, teal, white, yellow";
    var is_css_color_valid = true;
    var index_of_color = valid_css_colors.indexOf(background_color);
    if(index_of_color == -1 && background_color.match(/#([a-fA-F0-9]){3}(([a-fA-F0-9]){3})?\b/) == null) is_css_color_valid = false;
    if(is_css_color_valid){
      return background_color;
    }else{
      throw new ArgumentException(exception_error_message);
    }
  })(background_color, this.valid_css_colors);

  this.text_color = (function(text_color, valid_css_colors){
    var text_color = text_color || "black";
    var exception_error_message = "The color must be a css color value like #ffffff or one of these standard colors aqua, black, blue, fuchsia, gray, green, lime, maroon, navy, olive, orange, purple, red, silver, teal, white, yellow";
    var is_css_color_valid = true;
    var index_of_color = valid_css_colors.indexOf(text_color);
    if(index_of_color == -1 && text_color.match(/#([a-fA-F0-9]){3}(([a-fA-F0-9]){3})?\b/) == null) is_css_color_valid = false;
    if(is_css_color_valid){
      return text_color;
    }else{
      throw new ArgumentException(exception_error_message);
    }
  })(text_color, this.valid_css_colors);

  this.open_tag = "<"+ this.tag +" style='background_color: "+ this.background_color +"; color: "+ this.text_color +";'>";
  this.close_tag = "</"+ this.tag +">";
}

function JsTextMarker(text){
  this.text = text || "";

  this.mark_all_ocurrence_of = function(snippet_to_be_marked, tag){
    var tag = tag || new Tag();
    return this.text.replace("/" + snippet_to_be_marked + "/g", tag.open_tag + snippet_to_be_marked + tag.close_tag);
  };

  this.mark_first_ocurrence_of = function(snippet_to_be_marked, tag){
    var tag = tag || new Tag();
    return this.text.replace("/" + snippet_to_be_marked + "/", tag.open_tag + snippet_to_be_marked + tag.close_tag);
  };
}
