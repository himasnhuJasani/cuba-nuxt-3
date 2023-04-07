/* eslint-disable */
import Layout from "../data/layout.json";
export const useLayoutStore = defineStore({
  id: "layout",
  state: () => {
    return {
      layout: Layout,
      sidebarType: "default",
      boxlayout: true,
      footer: "",
      svg: "stroke-svg",
      sidebar: "compact-sidebar1",
    };
  },
  getters: {
    footer123: (state) => {
      return state.footer;
    },
    sidebar123: (state) => {
      return state.sidebar;
    },
  },
  actions: {
    setFooter(payload) {
      this.footer = payload.class;
    },
    set() {
      if (process.client) {
        document.body.className = this.layout.color.mix_layout;
        document.body.setAttribute("main-theme-layout", "compact-wrapper");
        document
          .getElementsByTagName("html")[0]
          .setAttribute("dir", this.layout.settings.layout_type);
        var primaryColor =
          localStorage.getItem("primary_color") ||
          this.layout.color.primary_color;
        var secondaryColor =
          localStorage.getItem("secondary_color") ||
          this.layout.color.secondary_color;
        var layoutVersion =
          localStorage.getItem("layoutVersion") ||
          this.layout.color.layout_version;
        if (primaryColor || secondaryColor) {
          addStyle(primaryColor, secondaryColor);
          if (layoutVersion) document.body.className = layoutVersion;
        }
      }
    },
    setLayoutType(payload) {

      document.body.classList.remove("rtl");
      document.body.classList.remove("ltr");
      document.body.classList.remove("boxed");
      document.documentElement.removeAttribute("dir");
      payload.class && document.body.setAttribute("class", payload.class);
      payload.class &&
        document.documentElement.setAttribute("dir", payload.class);

    
      this.layout.settings.layout_type = payload;
    },
    setLayout(payload) {
      if(document.body.className == 'box-layout'){
        document.body.className = 'box-layout '+ payload.class

      }
      else{

        document.body.className = payload.class;
      }
    },
    setColorScheme(payload) {
      setColor(payload);
      this.primaryColor = payload.primary;
      this.secondaryColor = payload.secondary;
      this.layout.color.layout_version = "light";
      if (process.client) {
        localStorage.setItem(
          "layoutVersion",
          this.layout.color.layout_version
        );
      }
    },
    setColorDarkScheme(payload) {
      setColor(payload);
      this.layout.color.layout_version = "dark-only";
      if (process.client) {
        localStorage.setItem(
          "layoutVersion",
          this.layout.color.layout_version
        );
      }
    },
 
    setCustomizeSidebarType(payload) {
      if (process.client) {
      
        localStorage.setItem("SidebarType", payload);
 
      }
    },
    setSvg( payload) {
      this.svg = payload;
      this.layout.settings.sidebar_setting=payload
    },
  },
});



function addStyle(primary, secondary) {
  document.documentElement.style.setProperty("--theme-deafult", primary);
  document.documentElement.style.setProperty("--theme-secondary", secondary);
}

function setColor(color) {
  if (process.client) {
    addStyle(color.primary, color.secondary);
    localStorage.setItem("primary_color", color.primary);
    localStorage.setItem("secondary_color", color.secondary);
  }
}


