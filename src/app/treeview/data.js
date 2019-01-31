export const treeView = {
    name: "All tree view",
    type: "root",
    children: [
      {
        name: "im folder 1",
        type: "folder",
        children: [
          {
            name: "im file 1 in folder 1",
            type: "file",
            description: "gklajsdlg jasldg kakjsg"
          },
          {
            name: "im file 2 in folder 1",
            type: "file",
            description: "gjklasdj gklajsdlg jasldg kakjsg"
          },
          {
            name: "im folder 2 in folder 1",
            type: "folder",
            children: [
              {
                name: "last file in folder 3",
                type: "file",
                description: " short description..."
              }
            ]
          }
        ]
      },
      {
        name: "im folder 2",
        type: "folder",
        children: [
          {
            name: "im file 1 in folder 2",
            type: "file",
            description: " asdgkj lasd gjklasdj gklajsdlg jasldg kakjsg"
          },
          {
            name: "im file 2 in folder 2",
            type: "file",
            description: " asdgkj lasd gjklasdj gklajsdlg jasldg kakjsg 2222222222"
          },
          {
            name: "im folder 2 in folder 2",
            type: "folder",
            children: [
              {
                name: "Im file 1 in folder 4",
                type: "file",
                description: " ajshf kjasfh kjasf hkasfh kjash kgahsk gkjas"
              },
              {
                name: "Im file 2 in folder 4",
                type: "file",
                description: " asdgkj lasd gjklasdj gklajsdlg jasldg kakjsg"
              }
            ]
          }
        ]
      }
    ]
};