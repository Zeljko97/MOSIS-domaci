(function(window, undefined) {
  var dictionary = {
    "f6efa476-c425-4089-97c9-16afb23ee384": "radovi",
    "02d22b61-72e6-49bf-9b2e-3947b4e9bd09": "radovi - landscape",
    "a8a16569-743b-434f-b4d7-37719e92378d": "Welcome Screen",
    "d172c227-a7fe-4863-840f-9bf95c402712": "Profile",
    "bc868003-7c74-4485-aab7-aaa92eaf7eb5": "Register Screen",
    "1578b45c-aa1a-4562-b2bb-a25f31c39d45": "Pijavi problem - landscape",
    "5a75e317-87fe-4954-8e45-1bc8a081bec7": "List friends - landscape",
    "5e36963a-a013-4838-99b4-c3d6bc4fa8eb": "Profile - landscape",
    "4317bbc5-d6eb-42e8-af45-ced8f4897cef": "Feed Screen - landscape",
    "afa08c88-d388-46fd-aa60-c8c845924742": "Welcome Screen - landscape",
    "d4af54b5-9a73-46f3-825d-aecb063d80da": "Home - landscape",
    "f6ca2276-bfc8-48e2-bd84-ca4714ec2cad": "Add friend - landscape",
    "b3e95872-4689-4c1a-a776-a955fef93b59": "Feed Screen",
    "779014b6-9b22-496f-a6ad-4126fc8ddacf": "Password recovery - landscape",
    "4f0b69d5-5724-4395-a04a-e4f2f7a4b01b": "Register Screen - landscape",
    "743549dd-b8df-405e-9cdf-b3b03bdd542f": "Coins - landscape",
    "67b85127-3ad2-41b4-b4ef-40a4391fe0ee": "Coins",
    "02c2d65a-1a86-47fc-a834-b3e4dbe52fde": "List friends",
    "a0fd77a7-2d2a-49fa-8d62-584684312a49": "Login Screen - landscape",
    "4b3dae92-3b34-42cc-8b02-ffc3055aaa33": "Add friend",
    "31e0839b-8a43-431e-bda7-0f83f2b037f5": "chat",
    "f75e87ec-9da7-4f42-89ab-d965494198b3": "home",
    "ecb5fda1-60b9-43bb-a897-02dbf4bd688e": "Password recovery Screen",
    "b7b91b98-6d50-4c2b-ab62-ce6ce9e889e8": "prijaviproblem",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Login Screen",
    "7a9290c8-e47f-440a-8bce-09e98b83c75c": "showmap",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default",
    "fddd110a-d264-40db-b48d-ae0db472fbe7": "ns"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);