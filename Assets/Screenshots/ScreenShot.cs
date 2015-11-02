using UnityEngine;
using System.Collections;

public class ScreenShot : MonoBehaviour {

	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
	
	}

    void capture() {
        Application.CaptureScreenshot("Assets/ " + "screenshots/Screenshot.png");
    }

    void OnGUI() {
        if (GUI.Button(new Rect(10, 50, 100, 30), "Capture")) {
            capture();
        }
    }
}
