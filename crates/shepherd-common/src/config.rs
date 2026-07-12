use std::{
    fs::{self, read_to_string},
    path::{Path, PathBuf},
};

use anyhow::Result;
use serde::{Deserialize, Serialize};

pub const DEFAULT_CONFIG_PATH: &str = "/etc/shepherd.toml";

#[derive(Debug, Default, Serialize, Deserialize, Clone)]
pub struct Config {
    #[serde(default)]
    pub mqtt: MqttConfig,
    #[serde(default)]
    pub app: AppConfig,
    #[serde(default)]
    pub run: RunConfig,
    #[serde(default)]
    pub ws: WsConfig,
    #[serde(default)]
    pub watch: WatchConfig,
    #[serde(default)]
    pub channel: ChannelConfig,
    #[serde(default)]
    pub path: PathConfig,
    #[serde(default)]
    pub patch: PatchConfig,
    #[serde(default)]
    pub hopper: HopperConfig,
}

#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct MqttConfig {
    #[serde(default = "default_mqtt_broker")]
    pub broker: String,
    #[serde(default = "default_mqtt_port")]
    pub port: u16,
}

fn default_mqtt_broker() -> String {
    "localhost".to_string()
}
fn default_mqtt_port() -> u16 {
    1883
}

impl Default for MqttConfig {
    fn default() -> Self {
        Self {
            broker: default_mqtt_broker(),
            port: default_mqtt_port(),
        }
    }
}

#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct AppConfig {
    #[serde(default = "default_app_service_id")]
    pub service_id: String,
    #[serde(default = "default_app_host")]
    pub host: String,
    #[serde(default = "default_app_port")]
    pub port: u16,
    #[serde(default = "default_app_static_dir")]
    pub static_dir: PathBuf,
    #[serde(default = "default_app_user_src_dir")]
    pub user_src_dir: PathBuf,
    #[serde(default = "default_app_patch_dir")]
    pub patch_dir: PathBuf,
}

fn default_app_service_id() -> String {
    "shepherd-app".to_string()
}
fn default_app_host() -> String {
    "0.0.0.0".to_string()
}
fn default_app_port() -> u16 {
    80
}
fn default_app_static_dir() -> PathBuf {
    default_path_root().join("static")
}
fn default_app_user_src_dir() -> PathBuf {
    default_path_root().join("usercode/projects")
}
fn default_app_patch_dir() -> PathBuf {
    PathBuf::from("/var/patchtool/staging")
}

impl Default for AppConfig {
    fn default() -> Self {
        Self {
            service_id: default_app_service_id(),
            host: default_app_host(),
            port: default_app_port(),
            static_dir: default_app_static_dir(),
            user_src_dir: default_app_user_src_dir(),
            patch_dir: default_app_patch_dir(),
        }
    }
}

#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct RunConfig {
    #[serde(default = "default_run_service_id")]
    pub service_id: String,
    #[serde(default = "default_run_start_button")]
    pub start_button: u32,
    #[serde(default = "default_run_gpio_device")]
    pub gpio_device: String,
    #[serde(default = "default_run_comp_timeout")]
    pub comp_timeout: u64,
    #[serde(default = "default_run_reset_script")]
    pub reset_script: PathBuf,
    #[serde(default = "default_run_usercode_script")]
    pub usercode_script: PathBuf,
    #[serde(default = "default_run_uid")]
    pub uid: u32,
    #[serde(default = "default_run_gid")]
    pub gid: u32,
    #[serde(default = "default_run_patch_apply")]
    pub patch_apply: PathBuf,
}

fn default_run_service_id() -> String {
    "shepherd-run".to_string()
}
fn default_run_start_button() -> u32 {
    26
}
fn default_run_gpio_device() -> String {
    "gpiochip0".to_string()
}
fn default_run_comp_timeout() -> u64 {
    180
}
fn default_run_reset_script() -> PathBuf {
    PathBuf::from("/usr/local/bin/robot_reset.py")
}
fn default_run_usercode_script() -> PathBuf {
    PathBuf::from("/usr/local/bin/usercode.py")
}
fn default_run_uid() -> u32 {
    1000
}
fn default_run_gid() -> u32 {
    1000
}
fn default_run_patch_apply() -> PathBuf {
    PathBuf::from("/usr/local/bin/patchtool-apply.sh")
}

impl Default for RunConfig {
    fn default() -> Self {
        Self {
            service_id: default_run_service_id(),
            start_button: default_run_start_button(),
            gpio_device: default_run_gpio_device(),
            comp_timeout: default_run_comp_timeout(),
            reset_script: default_run_reset_script(),
            usercode_script: default_run_usercode_script(),
            uid: default_run_uid(),
            gid: default_run_gid(),
            patch_apply: default_run_patch_apply(),
        }
    }
}

#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct WsConfig {
    #[serde(default = "default_ws_service_id")]
    pub service_id: String,
    #[serde(default = "default_ws_host")]
    pub host: String,
    #[serde(default = "default_ws_port")]
    pub port: u16,
    #[serde(default = "default_ws_log_buffer_size")]
    pub log_buffer_size: usize,
    #[serde(default = "default_ws_hopper_buffer_size")]
    pub hopper_buffer_size: usize,
}

fn default_ws_service_id() -> String {
    "shepherd-ws".to_string()
}
fn default_ws_host() -> String {
    "0.0.0.0".to_string()
}
fn default_ws_port() -> u16 {
    5001
}
fn default_ws_log_buffer_size() -> usize {
    // 16 MiB
    16 * (1 << 20)
}
fn default_ws_hopper_buffer_size() -> usize {
    // 64 KiB
    64 * (1 << 10)
}

impl Default for WsConfig {
    fn default() -> Self {
        Self {
            service_id: default_ws_service_id(),
            host: default_ws_host(),
            port: default_ws_port(),
            log_buffer_size: default_ws_log_buffer_size(),
            hopper_buffer_size: default_ws_hopper_buffer_size(),
        }
    }
}

#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct WatchConfig {
    #[serde(default = "default_watch_service_id")]
    pub service_id: String,
    #[serde(default = "default_watch_host")]
    pub host: String,
    #[serde(default = "default_watch_port")]
    pub port: u16,
}

fn default_watch_service_id() -> String {
    "shepherd-watch".to_string()
}
fn default_watch_host() -> String {
    "0.0.0.0".to_string()
}
fn default_watch_port() -> u16 {
    10100
}

impl Default for WatchConfig {
    fn default() -> Self {
        Self {
            service_id: default_watch_service_id(),
            host: default_watch_host(),
            port: default_watch_port(),
        }
    }
}

#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct ChannelConfig {
    #[serde(default = "default_channel_robot_control")]
    pub robot_control: String,
    #[serde(default = "default_channel_robot_log")]
    pub robot_log: String,
    #[serde(default = "default_channel_camera")]
    pub camera: String,
    #[serde(default = "default_user_status")]
    pub user_state: String,
    #[serde(default = "default_status")]
    pub status: String,
}

fn default_channel_robot_control() -> String {
    "robot/control".to_string()
}
fn default_channel_robot_log() -> String {
    "robot/log".to_string()
}
fn default_channel_camera() -> String {
    "camera".to_string()
}
fn default_user_status() -> String {
    "user/state".to_string()
}
fn default_status() -> String {
    "status".to_string()
}

impl Default for ChannelConfig {
    fn default() -> Self {
        Self {
            robot_control: default_channel_robot_control(),
            robot_log: default_channel_robot_log(),
            camera: default_channel_camera(),
            user_state: default_user_status(),
            status: default_status(),
        }
    }
}

#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct PathConfig {
    #[serde(default = "default_path_root")]
    pub root: PathBuf,
    #[serde(default = "default_path_hopper")]
    pub hopper: PathBuf,
    #[serde(default = "default_path_user_cur_dir")]
    pub user_cur_dir: PathBuf,
    #[serde(default = "default_path_team_image")]
    pub team_image: PathBuf,
    #[serde(default = "default_path_game_image")]
    pub game_image: PathBuf,
    #[serde(default = "default_path_robot_usb")]
    pub robot_usb: PathBuf,
    #[serde(default = "default_path_arena_usb")]
    pub arena_usb: PathBuf,
}

fn default_path_root() -> PathBuf {
    PathBuf::from("/var/shepherd")
}
fn default_path_hopper() -> PathBuf {
    PathBuf::from("/run/hopper")
}
fn default_path_user_cur_dir() -> PathBuf {
    default_path_root().join("usercode/current")
}
fn default_path_team_image() -> PathBuf {
    default_path_root().join("team-image.jpg")
}
fn default_path_game_image() -> PathBuf {
    default_path_root().join("game-image.jpg")
}
fn default_path_robot_usb() -> PathBuf {
    PathBuf::from("/media/RobotUSB")
}
fn default_path_arena_usb() -> PathBuf {
    PathBuf::from("/media/ArenaUSB")
}

impl Default for PathConfig {
    fn default() -> Self {
        Self {
            root: default_path_root(),
            hopper: default_path_hopper(),
            user_cur_dir: default_path_user_cur_dir(),
            team_image: default_path_team_image(),
            game_image: default_path_game_image(),
            robot_usb: default_path_robot_usb(),
            arena_usb: default_path_arena_usb(),
        }
    }
}

#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct PatchConfig {
    #[serde(default = "default_patch_uid")]
    pub uid: u32,
    #[serde(default = "default_patch_gid")]
    pub gid: u32,
    #[serde(default = "default_patch_working_dir")]
    pub working_dir: PathBuf,
}

fn default_patch_uid() -> u32 {
    0u32
}
fn default_patch_gid() -> u32 {
    0u32
}
fn default_patch_working_dir() -> PathBuf {
    PathBuf::from("/")
}

impl Default for PatchConfig {
    fn default() -> Self {
        Self {
            uid: default_patch_uid(),
            gid: default_patch_gid(),
            working_dir: default_patch_working_dir(),
        }
    }
}

#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct HopperConfig {
    #[serde(default = "default_hopper_gid")]
    pub gid: Option<u32>,
}

fn default_hopper_gid() -> Option<u32> {
    None
}

impl Default for HopperConfig {
    fn default() -> Self {
        Self {
            gid: default_hopper_gid(),
        }
    }
}

impl Config {
    pub fn from_file(path: Option<&Path>) -> Result<Self> {
        let path = path.unwrap_or(Path::new(DEFAULT_CONFIG_PATH));
        let data = read_to_string(path)?;
        let cfg: Self = toml::from_str(&data)?;
        Ok(cfg)
    }

    pub fn create_dir<P>(path: P) -> Result<()>
    where
        P: AsRef<Path>,
    {
        if !path.as_ref().is_dir() {
            tracing::debug!("creating {:?}", path.as_ref());
            fs::create_dir_all(path.as_ref())?;
        }

        Ok(())
    }

    pub fn setup_dirs(&self) -> Result<()> {
        fn _create_dir<P>(path: P)
        where
            P: AsRef<Path>,
        {
            if let Err(e) = Config::create_dir(path.as_ref()) {
                tracing::warn!(
                    "directory creation for '{:?}' failed: {:?}",
                    path.as_ref(),
                    e
                );
            }
        }

        _create_dir(&self.path.root);
        _create_dir(&self.path.user_cur_dir);

        _create_dir(&self.app.static_dir);
        _create_dir(&self.app.user_src_dir);
        _create_dir(&self.app.patch_dir);

        Ok(())
    }
}
