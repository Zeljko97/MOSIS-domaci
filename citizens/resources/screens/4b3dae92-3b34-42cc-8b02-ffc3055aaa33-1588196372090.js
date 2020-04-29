jQuery("#simulation")
  .on("click", ".s-4b3dae92-3b34-42cc-8b02-ffc3055aaa33 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Label_19")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-4b3dae92-3b34-42cc-8b02-ffc3055aaa33 #s-Label_19 span": {
                      "attributes": {
                        "color": "#6200EE"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-4b3dae92-3b34-42cc-8b02-ffc3055aaa33 #s-Label_20 span": {
                      "attributes": {
                        "color": "#BCBCBC"
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
    } else if(jFirer.is("#s-Label_20")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-4b3dae92-3b34-42cc-8b02-ffc3055aaa33 #s-Label_20 span": {
                      "attributes": {
                        "color": "#6200EE"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-4b3dae92-3b34-42cc-8b02-ffc3055aaa33 #s-Label_19 span": {
                      "attributes": {
                        "color": "#BCBCBC"
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
    } else if(jFirer.is("#s-Item_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-4b3dae92-3b34-42cc-8b02-ffc3055aaa33 #s-Item_1 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#F0E8FC",
                        "background-attachment": "scroll"
                      }
                    }
                  },{
                    "#s-4b3dae92-3b34-42cc-8b02-ffc3055aaa33 #s-Item_1": {
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
                    "#s-4b3dae92-3b34-42cc-8b02-ffc3055aaa33 #s-Item_1 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-attachment": "scroll"
                      }
                    }
                  },{
                    "#s-4b3dae92-3b34-42cc-8b02-ffc3055aaa33 #s-Item_1": {
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
                    "#s-4b3dae92-3b34-42cc-8b02-ffc3055aaa33 #s-Item_2 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#F0E8FC",
                        "background-attachment": "scroll"
                      }
                    }
                  },{
                    "#s-4b3dae92-3b34-42cc-8b02-ffc3055aaa33 #s-Item_2": {
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
                    "#s-4b3dae92-3b34-42cc-8b02-ffc3055aaa33 #s-Item_2 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-attachment": "scroll"
                      }
                    }
                  },{
                    "#s-4b3dae92-3b34-42cc-8b02-ffc3055aaa33 #s-Item_2": {
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
                    "#s-4b3dae92-3b34-42cc-8b02-ffc3055aaa33 #s-Item_3 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#F0E8FC",
                        "background-attachment": "scroll"
                      }
                    }
                  },{
                    "#s-4b3dae92-3b34-42cc-8b02-ffc3055aaa33 #s-Item_3": {
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
                    "#s-4b3dae92-3b34-42cc-8b02-ffc3055aaa33 #s-Item_3 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-attachment": "scroll"
                      }
                    }
                  },{
                    "#s-4b3dae92-3b34-42cc-8b02-ffc3055aaa33 #s-Item_3": {
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
    } else if(jFirer.is("#s-raised_Button")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-4b3dae92-3b34-42cc-8b02-ffc3055aaa33 #s-raised_Button > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#3700B3",
                        "background-attachment": "scroll",
                        "box-shadow": "0px 5px 15px 0px #999999"
                      }
                    }
                  },{
                    "#s-4b3dae92-3b34-42cc-8b02-ffc3055aaa33 #s-raised_Button": {
                      "attributes": {
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-4b3dae92-3b34-42cc-8b02-ffc3055aaa33 #s-raised_Button": {
                      "attributes-ie": {
                        "-pie-background": "#3700B3",
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
                    "#s-4b3dae92-3b34-42cc-8b02-ffc3055aaa33 #s-raised_Button > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#6200EE",
                        "background-attachment": "scroll",
                        "box-shadow": "0px 2px 5px 0px #999999"
                      }
                    }
                  },{
                    "#s-4b3dae92-3b34-42cc-8b02-ffc3055aaa33 #s-raised_Button": {
                      "attributes": {
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-4b3dae92-3b34-42cc-8b02-ffc3055aaa33 #s-raised_Button": {
                      "attributes-ie": {
                        "-pie-background": "#6200EE",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 200
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
    } else if(jFirer.is("#s-raised_Button_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-4b3dae92-3b34-42cc-8b02-ffc3055aaa33 #s-raised_Button_1 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#3700B3",
                        "background-attachment": "scroll",
                        "box-shadow": "0px 5px 15px 0px #999999"
                      }
                    }
                  },{
                    "#s-4b3dae92-3b34-42cc-8b02-ffc3055aaa33 #s-raised_Button_1": {
                      "attributes": {
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-4b3dae92-3b34-42cc-8b02-ffc3055aaa33 #s-raised_Button_1": {
                      "attributes-ie": {
                        "-pie-background": "#3700B3",
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
                    "#s-4b3dae92-3b34-42cc-8b02-ffc3055aaa33 #s-raised_Button_1 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#6200EE",
                        "background-attachment": "scroll",
                        "box-shadow": "0px 2px 5px 0px #999999"
                      }
                    }
                  },{
                    "#s-4b3dae92-3b34-42cc-8b02-ffc3055aaa33 #s-raised_Button_1": {
                      "attributes": {
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-4b3dae92-3b34-42cc-8b02-ffc3055aaa33 #s-raised_Button_1": {
                      "attributes-ie": {
                        "-pie-background": "#6200EE",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 200
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
  .on("pageload", ".s-4b3dae92-3b34-42cc-8b02-ffc3055aaa33 .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-spinner-2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-spinner-2" ]
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
  .on("orientationlandscape", ".s-4b3dae92-3b34-42cc-8b02-ffc3055aaa33 .orientationlandscape", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-raised_Button")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/f6ca2276-bfc8-48e2-bd84-ca4714ec2cad"
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