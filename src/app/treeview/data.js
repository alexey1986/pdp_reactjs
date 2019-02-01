export const treeView = {
    name: "All tree view",
    type: "root",
    children: [
      {
        id: "1",
        name: "im folder 1",
        type: "folder",
        children: [
          {
            id: "3",
            name: "im file 1 in folder 1",
            type: "file",
            description: "gklajsdlg jasldg kakjsg"
          },
          {
            id: "4",
            name: "im file 2 in folder 1",
            type: "file",
            description: "gjklasdj gklajsdlg jasldg kakjsg"
          },
          {
            id: "5",
            name: "im folder 2 in folder 1",
            type: "folder",
            children: [
              {
                id: "9",
                name: "last file in folder 3",
                type: "file",
                description: " short description..."
              }
            ]
          }
        ]
      },
      {
        id: "2",
        name: "im folder 2",
        type: "folder",
        children: [
          {
            id: "6",
            name: "im file 1 in folder 2",
            type: "file",
            description: " asdgkj lasd gjklasdj gklajsdlg jasldg kakjsg"
          },
          {
            id: "7",
            name: "im file 2 in folder 2",
            type: "file",
            description: " asdgkj lasd gjklasdj gklajsdlg jasldg kakjsg 2222222222"
          },
          {
            id: "8",
            name: "im folder 2 in folder 2",
            type: "folder",
            children: [
              {
                id: "10",
                name: "Im file 1 in folder 4",
                type: "file",
                description: " ajshf kjasfh kjasf hkasfh kjash kgahsk gkjas"
              },
              {
                id: "11",
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