using UnityEngine;
using System.Runtime.Serialization.Formatters.Binary;
using System.IO;

#if UNITY_EDITOR
using UnityEditor;
#endif
//using System.Collections;
//using System.Collections.Generic;


public class WallCreator : MonoBehaviour {

    bool creating;

    Vector3 startPoint;
    Vector3 endPoint;

    public static Object emptyObj;
    public GameObject wallPrefab;
    GameObject wall;

    RaycastHit hitTemp;
    float yPosition = 0f;

    public string savePath;
    public string fileName;
    public GameObject ground;

    void Awake() {
        if (wallPrefab == null) {
            wallPrefab = Resources.Load("Wall") as GameObject;
        }
        if (savePath == "") {
            savePath = "Assets/DynamicCreator/Prefabs/Walls/";
        }
        if (fileName == "") {
            fileName = "Wall";
        }
    }

    void OnGUI() {
        if (GUI.Button(new Rect(10, 10, 100, 30), "Save Button")) {
            Save();
        }
    }

    void Start () {
    }
	
	void Update () {
        getInput();
    }

    void getInput() {
        if (Input.GetMouseButtonDown(0)) {
            setStart();
        } else if (Input.GetMouseButtonUp(0)) {
            setEnd();
        } else {
            if (creating) {
                adjust();
            }
        }

    }

    void setStart() {
        creating = true;
        startPoint = getWorldPoint();
        wall = (GameObject)Instantiate(wallPrefab, startPoint, Quaternion.identity);
        wall.name = fileName;
    }

    void setEnd() {
        creating = false;
        endPoint = getWorldPoint();
        adjust();
    }

    void adjust() {
        endPoint = getWorldPoint();
        adjustWall();
    }

    void adjustWall() {
        float distance = Vector3.Distance(startPoint, endPoint);
        wall.transform.position = startPoint /2 + endPoint/2;
        wall.transform.right = startPoint - wall.transform.position;
        wall.transform.localScale = new Vector3(distance, wall.transform.localScale.y, wall.transform.localScale.z);


    }
    Vector3 getWorldPoint() {
        RaycastHit hit;
        RaycastHit[] hits;
        hits = Physics.RaycastAll( GetComponent<Camera>().ScreenPointToRay(Input.mousePosition));

        for (int i = 0; i < hits.Length; i++) {
            hit = hits[i];
            if (ground != null) {
                if (hit.collider.gameObject.Equals(ground)){
                    hitTemp = hit;
                    yPosition = wallPrefab.transform.localScale.y / 2 + hit.transform.position.y;
                }
            } else {
                if (!hit.collider.name.Equals(wallPrefab.name) && !hit.collider.Equals(wall)) {
                    hitTemp = hit;
                    yPosition = wallPrefab.transform.localScale.y / 2 + hit.transform.position.y;
                }
            }
        }
        return new Vector3(hitTemp.point.x, yPosition, hitTemp.point.z);
    }


    public void Save() {
        Destroy(wall);
        #if UNITY_EDITOR
        GameObject[] selected_walls = Selection.gameObjects;
        int i;
        int i_temp = 1;
        string file_location = savePath + "wall.prefab";
        foreach (GameObject currentWall in selected_walls) {
            i = 1;
            if (currentWall.name != wall.name) {
                while (File.Exists(savePath + currentWall.name + " " + i.ToString() + ".prefab")) { i++; }
                file_location = savePath + currentWall.name + " " + i.ToString() + ".prefab";
            } else {
                if (i < i_temp) { i = i_temp; }
                while (File.Exists(savePath + fileName + " " + i.ToString() + ".prefab")) { i++; }
                i_temp = i;
                file_location = savePath + fileName + " " + i.ToString() + ".prefab";
            }
            emptyObj = PrefabUtility.CreateEmptyPrefab(file_location);
            PrefabUtility.ReplacePrefab(currentWall, emptyObj, ReplacePrefabOptions.ConnectToPrefab);
            

        }
        #endif
    }
}

