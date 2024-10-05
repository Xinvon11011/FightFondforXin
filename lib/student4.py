# Student 4: Handles memory updates or caching previous results
import json

def cache_result(result, cache_file='cache.json'):
    with open(cache_file, 'w') as f:
        json.dump(result, f)

def load_cached_result(cache_file='cache.json'):
    with open(cache_file, 'r') as f:
        result = json.load(f)
    return result
