Tracing objects like pedestrians, cars, bicycles, buses, or trucks is a crucial component of Autonomous Navigation. Indeed, to avoid collisions with a dynamic (moving) environments, an autonomous agent must be able to predict where objects will most likely be in the future. To do this, the agent needs to be able to consistently track objects and their trajectory in time.<br>

Our project consist in creating a Camera-Radar tracking pipeline. The main idea is to use the camera to compensate for the flaws of the radar (such as sparse point-clouds), and use the radar to compensate the flaws of the cmaera (such as lack of depth perception). We use off-the-shelf detection backbones to focus on the tracking, in which we make profit of the accurate velocity measurement from the radar sensor thanks to the Doppler effect.

Furthermore, we focus on making our pipeline robust to sensor failure, incorporating versatility in the backbone selection depending on noise levels for each sensors.
