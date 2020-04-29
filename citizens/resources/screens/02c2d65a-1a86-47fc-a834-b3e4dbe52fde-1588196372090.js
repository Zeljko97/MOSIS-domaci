jQuery("#simulation")
  .on("click", ".s-02c2d65a-1a86-47fc-a834-b3e4dbe52fde .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Item_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-02c2d65a-1a86-47fc-a834-b3e4dbe52fde #s-Item_1 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#F0E8FC",
                        "background-attachment": "scroll"
                      }
                    }
                  },{
                    "#s-02c2d65a-1a86-47fc-a834-b3e4dbe52fde #s-Item_1": {
                      "attributes-ie": {
                        "-pie-background": "#F0E8FC",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-02c2d65a-1a86-47fc-a834-b3e4dbe52fde #s-Item_1 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-attachment": "scroll"
                      }
                    }
                  },{
                    "#s-02c2d65a-1a86-47fc-a834-b3e4dbe52fde #s-Item_1": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 500
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Item_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-02c2d65a-1a86-47fc-a834-b3e4dbe52fde #s-Item_2 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#F0E8FC",
                        "background-attachment": "scroll"
                      }
                    }
                  },{
                    "#s-02c2d65a-1a86-47fc-a834-b3e4dbe52fde #s-Item_2": {
                      "attributes-ie": {
                        "-pie-background": "#F0E8FC",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-02c2d65a-1a86-47fc-a834-b3e4dbe52fde #s-Item_2 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-attachment": "scroll"
                      }
                    }
                  },{
                    "#s-02c2d65a-1a86-47fc-a834-b3e4dbe52fde #s-Item_2": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 500
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Item_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-02c2d65a-1a86-47fc-a834-b3e4dbe52fde #s-Item_3 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#F0E8FC",
                        "background-attachment": "scroll"
                      }
                    }
                  },{
                    "#s-02c2d65a-1a86-47fc-a834-b3e4dbe52fde #s-Item_3": {
                      "attributes-ie": {
                        "-pie-background": "#F0E8FC",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-02c2d65a-1a86-47fc-a834-b3e4dbe52fde #s-Item_3 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-attachment": "scroll"
                      }
                    }
                  },{
                    "#s-02c2d65a-1a86-47fc-a834-b3e4dbe52fde #s-Item_3": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 500
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_20")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-02c2d65a-1a86-47fc-a834-b3e4dbe52fde #s-Label_20 span": {
                      "attributes": {
                        "color": "#6200EE"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/4b3dae92-3b34-42cc-8b02-ffc3055aaa33"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_21")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-02c2d65a-1a86-47fc-a834-b3e4dbe52fde #s-Label_21 span": {
                      "attributes": {
                        "color": "#6200EE"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/02c2d65a-1a86-47fc-a834-b3e4dbe52fde"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_91")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/31e0839b-8a43-431e-bda7-0f83f2b037f5"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_92")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/31e0839b-8a43-431e-bda7-0f83f2b037f5"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_93")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/31e0839b-8a43-431e-bda7-0f83f2b037f5"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Triangle")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/f75e87ec-9da7-4f42-89ab-d965494198b3",
                    "transition": {
                      "type": "slideright",
                      "duration": 700
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("orientationlandscape", ".s-02c2d65a-1a86-47fc-a834-b3e4dbe52fde .orientationlandscape", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Label_21")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/5a75e317-87fe-4954-8e45-1bc8a081bec7"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  });