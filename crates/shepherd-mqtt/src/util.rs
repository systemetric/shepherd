pub struct Wildcard {
    expr: String,
}

impl Wildcard {
    /// create a new wildcard from an expression that can be used to
    /// match topics
    pub fn new<S>(expr: S) -> Self
    where
        S: AsRef<str>,
    {
        Self {
            expr: expr.as_ref().to_string(),
        }
    }

    /// check if a topic name matches this wildcard
    pub fn matches<S>(&self, topic: S) -> bool
    where
        S: AsRef<str>,
    {
        fn recursive_match(t: Vec<String>, w: Vec<String>) -> bool {
            if t.is_empty() {
                if w.is_empty() || w[0] == "#" {
                    return true;
                }
                return false;
            }

            if w.is_empty() {
                return false;
            }

            if w[0] == "#" {
                return true;
            }

            if t[0] == w[0] || w[0] == "+" {
                return recursive_match(t.split_at(1).1.to_vec(), w.split_at(1).1.to_vec());
            }

            false
        }

        let topic_parts: Vec<String> = topic.as_ref().split('/').map(|s| s.to_string()).collect();
        let wildcard_parts: Vec<String> = self.expr.split('/').map(|s| s.to_string()).collect();

        recursive_match(topic_parts, wildcard_parts)
    }
}

#[cfg(test)]
mod tests {
    #[test]
    fn test_topic_matches() {
        use crate::Wildcard;

        assert!(Wildcard::new("#").matches("test/test"));
        assert!(Wildcard::new("test/#").matches("test/test"));
        assert!(!Wildcard::new("test/#").matches("test1/test"));
        assert!(Wildcard::new("test/+/test").matches("test/test/test"));
        assert!(!Wildcard::new("test/+/test").matches("test/test"));
        assert!(Wildcard::new("test/test").matches("test/test"));
        assert!(!Wildcard::new("test/test").matches("test1/test"));
    }
}
