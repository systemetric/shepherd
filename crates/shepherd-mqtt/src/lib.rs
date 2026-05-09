mod client;
pub mod messages;
mod util;

pub use client::*;
pub use util::*;

/// Generate a status channel name from a service ID
pub fn status_for<S>(service_id: S) -> String
where
    S: AsRef<str>,
{
    format!("{}/status", service_id.as_ref())
}
